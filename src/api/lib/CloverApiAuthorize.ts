import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverConfig } from '../../common';
import type { ICloverAxiosConfig } from '../../common';
import { CloverAuthResModel } from '../model';
import type { ICloverApiAuthRes } from '../interface';

export class CloverApiAuthorize extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * @param {string} appId This ID uniquely identifies your app on the Clover App Market.
     * @param {string} appSecret This ID is a secret key that is assigned to your app by Clover.
     * @param {string} code Authorization Code: An authorized merchant is redirected to your app along with an authorization code.
     */
    async confirm(appId: string, appSecret: string, code: string): Promise<CloverAuthResModel> {
        const response: AxiosResponse<ICloverApiAuthRes> = await this.client.get<ICloverApiAuthRes>('/oauth/token', {
            params: { client_id: appId, client_secret: appSecret, code },
        });

        return plainToClass(CloverAuthResModel, response.data);
    }
}
