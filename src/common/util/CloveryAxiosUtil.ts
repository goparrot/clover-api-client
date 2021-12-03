import { default as Axios } from 'axios';
import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import axiosRetry, { exponentialDelay, isNetworkOrIdempotentRequestError } from 'axios-retry';
import type { IAxiosRetryConfig } from 'axios-retry';
import deepmerge from 'deepmerge';
import { stringify } from 'qs';
import { CloverAxiosException } from '../exception';
import type { ICloverAxiosConfig, ICloverAxiosRequestConfig } from '../interface';

export const defaultMaxRetries = 6;

/**
 * @throws {CloverAxiosException}
 */
export function createAxiosInstance(config: ICloverAxiosConfig): AxiosInstance {
    Axios.defaults.timeout = 15000;
    Axios.defaults.baseURL = config.baseUrl;

    if (config.accessToken) {
        Axios.defaults.headers.common['Authorization'] = `Bearer ${config.accessToken}`;
    }

    const axiosConfig: ICloverAxiosRequestConfig = deepmerge(
        {
            timeout: Axios.defaults.timeout,
            // by default we enable keepAlive in node js
            keepAlive: true,
            // `paramsSerializer` is an optional function in charge of serializing `params`
            paramsSerializer: function (params: string): string {
                return stringify(params, { encode: false, arrayFormat: 'comma' });
            },
        },
        config.axiosConfig || {},
    );

    const axios: AxiosInstance = Axios.create(axiosConfig);

    axiosRetry(
        axios,
        deepmerge<IAxiosRetryConfig>(
            {
                retries: config.maxRetries || defaultMaxRetries, // ~ 15s
                shouldResetTimeout: true,
                retryDelay: exponentialDelay,
                /**
                 * We are using custom logic, because, default function doesn't retry POST methods
                 * @param {AxiosError} error
                 * @return {boolean}
                 */
                retryCondition: (error: AxiosError): boolean => {
                    const canRetryPostRequest = (): boolean => {
                        return (
                            error.config &&
                            error.config.method === 'post' && // Only post method
                            Boolean(error.code) && // Prevents retrying cancelled requests
                            error.code !== 'ECONNABORTED' && // Prevents retrying timed out requests
                            (!error.response || (error.response.status >= 500 && error.response.status <= 599)) // Prevents retrying unsafe errors
                        );
                    };

                    return isNetworkOrIdempotentRequestError(error) || canRetryPostRequest();
                },
            },
            config.axiosRetryConfig || {},
        ),
    );

    axios.interceptors.request.use((requestConfig: AxiosRequestConfig): AxiosRequestConfig => {
        if (!requestConfig.headers) {
            requestConfig.headers = {};
        }

        if (config.tokenRateLimit) {
            requestConfig.headers['X-RateLimit-tokenLimit'] = `${config.tokenRateLimit}`;
        }

        if (config.crossTokenRateLimit) {
            requestConfig.headers['X-RateLimit-crossTokenLimit'] = `${config.crossTokenRateLimit}`;
        }

        if (config.tokenConcurrentRateLimit) {
            requestConfig.headers['X-RateLimit-tokenConcurrentLimit'] = `${config.tokenConcurrentRateLimit}`;
        }

        if (config.crossTokenConcurrentRateLimit) {
            requestConfig.headers['X-RateLimit-crossTokenConcurrentLimit'] = `${config.crossTokenConcurrentRateLimit}`;
        }

        // @ts-ignore
        requestConfig.metadata = { startTime: new Date() };

        return requestConfig;
    });

    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            // @ts-ignore
            response.config.metadata.endTime = new Date();

            return response;
        },
        async (error: any) => {
            return Promise.reject(new CloverAxiosException(error));
        },
    );

    return axios;
}
