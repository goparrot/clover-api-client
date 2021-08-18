import type { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig } from '../../common';
import { CloverApiOrderTypeElementResModel, CloverApiDefaultServiceChargeModel, CloverApiMerchantResModel } from '../model';
import type { ICloverApiOrderTypeElementRes, ICloverApiDefaultServiceCharge, ICloverApiMerchantRes, ICloverApiMerchantParam } from '../interface';

export class CloverApiMerchant extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    async retrieve(merchantId: string, params: Partial<ICloverApiMerchantParam> = {}): Promise<CloverApiMerchantResModel> {
        const response: AxiosResponse<ICloverApiMerchantRes> = await this.client.get<ICloverApiMerchantRes>(`/v3/merchants/${merchantId}`, { params });

        return plainToClass(CloverApiMerchantResModel, response.data);
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
