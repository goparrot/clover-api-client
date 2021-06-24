import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverConfig } from '../../common';
import { CloverApiKeyResModel } from '../model';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverApiKeyRes } from '../interface';

export class CloverApiKey extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    async retrieve(): Promise<CloverApiKeyResModel> {
        const response: AxiosResponse<ICloverApiKeyRes> = await this.client.get<ICloverApiKeyRes>('pakms/apikey');

        return plainToClass(CloverApiKeyResModel, response.data);
    }
}
