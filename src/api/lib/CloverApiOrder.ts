import type { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig } from '../../common';
import type {
    ICloverApiCustomOrderReq,
    ICloverApiCustomOrderRes,
    ICloverApiCustomLineItemReq,
    ICloverApiCustomOrderLineItemRes,
    ICloverApiAtomicOrderReq,
    ICloverApiAtomicOrderRes,
    ICloverApiCheckoutAtomicOrderCart,
} from '../interface';
import {
    CloverApiCustomOrderResModel,
    CloverApiCustomOrderLineItemResModel,
    CloverApiCheckoutAtomicOrderResModel,
    CloverApiAtomicOrderResModel,
} from '../model';

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

    async checkoutAtomic(merchantId: string, data: ICloverApiAtomicOrderReq): Promise<CloverApiCheckoutAtomicOrderResModel> {
        const response: AxiosResponse<ICloverApiCheckoutAtomicOrderCart> = await this.client.post<ICloverApiCheckoutAtomicOrderCart>(
            `/v3/merchants/${merchantId}/atomic_order/checkouts`,
            data,
        );

        return plainToClass(CloverApiCheckoutAtomicOrderResModel, response.data);
    }

    async createAtomic(merchantId: string, data: ICloverApiAtomicOrderReq): Promise<CloverApiAtomicOrderResModel> {
        const response: AxiosResponse<ICloverApiAtomicOrderRes> = await this.client.post<ICloverApiAtomicOrderRes>(
            `/v3/merchants/${merchantId}/atomic_order/orders`,
            data,
        );

        return plainToClass(CloverApiAtomicOrderResModel, response.data);
    }
}
