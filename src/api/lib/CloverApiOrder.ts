import type { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig } from '../../common';
import type { ICloverApiCustomOrderReq, ICloverApiCustomOrderRes, ICloverApiCustomLineItemReq, ICloverApiCustomOrderLineItemRes } from '../interface';
import { CloverApiCustomOrderResModel, CloverApiCustomOrderLineItemResModel } from '../model';

export class CloverApiOrder extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    async createCustom(merchantId: string, data?: ICloverApiCustomOrderReq): Promise<CloverApiCustomOrderResModel> {
        const response: AxiosResponse<ICloverApiCustomOrderRes> = await this.client.post<ICloverApiCustomOrderRes>(`/v3/merchants/${merchantId}/orders`, data);

        return plainToClass(CloverApiCustomOrderResModel, response.data);
    }

    async addCustomLineItem(merchantId: string, orderId: string, data: ICloverApiCustomLineItemReq): Promise<CloverApiCustomOrderLineItemResModel> {
        const response: AxiosResponse<ICloverApiCustomOrderLineItemRes> = await this.client.post<ICloverApiCustomOrderLineItemRes>(
            `/v3/merchants/${merchantId}/orders/${orderId}/line_items`,
            data,
        );

        return plainToClass(CloverApiCustomOrderLineItemResModel, response.data);
    }
}
