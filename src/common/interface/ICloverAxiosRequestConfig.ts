import type { AxiosRequestConfig } from 'axios';

export interface ICloverAxiosRequestConfig extends AxiosRequestConfig {
    // `httpAgent` and `httpsAgent` define a custom agent to be used when performing http
    // and https requests, respectively, in node.js. This allows options to be added like
    // `keepAlive` that are not enabled by default.
    keepAlive?: boolean;
}
