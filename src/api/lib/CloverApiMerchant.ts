import type { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig } from '../../common';
import { CloverApiOrderTypeElementResModel, CloverApiDefaultServiceChargeModel } from '../model';
import type { ICloverApiOrderTypeElementRes, ICloverApiDefaultServiceCharge } from '../interface';

export class CloverApiMerchant extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    async listOrderType(merchantId: string): Promise<CloverApiOrderTypeElementResModel> {
        const response: AxiosResponse<ICloverApiOrderTypeElementRes> = await this.client.get<ICloverApiOrderTypeElementRes>(
            `/v3/merchants/${merchantId}/order_types`,
        );

        return plainToClass(CloverApiOrderTypeElementResModel, response.data);
    }

    async getDefaultService(merchantId: string): Promise<CloverApiDefaultServiceChargeModel> {
        const response: AxiosResponse<ICloverApiDefaultServiceCharge> = await this.client.get<ICloverApiDefaultServiceCharge>(
            `/v3/merchants/${merchantId}/default_service_charge`,
        );

        return plainToClass(CloverApiDefaultServiceChargeModel, response.data);
    }
}
