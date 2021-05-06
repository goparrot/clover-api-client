import type { AxiosRequestConfig } from 'axios';
import type { IAxiosRetryConfig } from 'axios-retry';

export interface ICloverAxiosConfig {
    /**
     * Clover provides its REST API at a separate base URL in the production environment.
     * Platform API (US & Canada): https://api.clover.com
     * Platform API (EU): https://api.eu.clover.com
     * Ecommerce service API: https://scl.clover.com
     */
    baseUrl: string;
    /**
     * With the exception of tokenizing a card and confirm code, all Ecommerce API endpoints require an OAuth-generated auth_token with specific permissions.
     */
    accessToken?: string;
    axiosConfig?: AxiosRequestConfig;
    axiosRetryConfig?: IAxiosRetryConfig;
    maxRetries?: number;
    /**
     * Indicates that your app is reaching our request rate limits, signaling too many requests per second.
     * Per token.
     * @default 16
     */
    tokenRateLimit?: number;
    /**
     * Indicates that your app is reaching our request rate limits, signaling too many requests per second.
     * Per app.
     * @default 50
     */
    crossTokenRateLimit?: number;
    /**
     * X-RateLimit-tokenConcurrentLimit indicates that your app is making too many concurrent requests.
     * Per token concurrently.
     * A request is considered concurrent if there’s another in-progress request that has not returned a response.
     * @default 5
     */
    tokenConcurrentRateLimit?: number;
    /**
     * Indicates that your app is making too many concurrent requests.
     * Per app concurrently.
     * A request is considered concurrent if there’s another in-progress request that has not returned a response.
     * @default 10
     */
    crossTokenConcurrentRateLimit?: number;
}
