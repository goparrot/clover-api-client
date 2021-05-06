import type { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

export class CloverAxiosException<T = any> extends Error implements AxiosError {
    config: AxiosRequestConfig;
    code?: string;
    request?: any;
    response?: AxiosResponse<T>;
    isAxiosError: boolean;
    toJSON: () => Record<string, any>;

    constructor(error: Partial<AxiosError>) {
        super(error.message);

        const responseMessage: string = error.response?.data ? `Response: ${JSON.stringify(error.response.data)}` : '';
        const errorMessage: string =
            responseMessage && error.message && !error.message.includes(responseMessage)
                ? `${error.message}, ${responseMessage}`
                : responseMessage || error.message || '';

        Object.assign(this, error);
        this.message = errorMessage;

        this.name = error.constructor.name;
        this.code = error.code;

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CloverAxiosException);
        }
    }
}
