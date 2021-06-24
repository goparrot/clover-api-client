import type { AxiosInstance } from 'axios';
import { createAxiosInstance } from '../util';
import type { ICloverAxiosConfig } from '../interface';

export abstract class CloverConfig {
    readonly client: AxiosInstance;

    protected constructor(config: ICloverAxiosConfig) {
        this.client = createAxiosInstance(config);
    }
}
