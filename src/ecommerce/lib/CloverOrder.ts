import type { AxiosResponse } from 'axios';
import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig } from '../../common';
import type { ICloverPayOrderReq, ICloverPayOrderRes, ICloverReturnOrderRes, ICloverReturnOrderReq } from '../interface';
import { CloverPayOrderResModel, CloverReturnOrderResModel } from '../model';

export class CloverOrder extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     *
     * @param {string} orderId
     * @param {ICloverPayOrderReq} body
     */
    async pay(orderId: string, body: ICloverPayOrderReq): Promise<CloverPayOrderResModel> {
        const response: AxiosResponse<ICloverPayOrderRes> = await this.client.post<ICloverPayOrderRes>(`/v1/orders/${orderId}/pay`, body);

        return plainToClass(CloverPayOrderResModel, response.data);
    }

    async return(orderId: string, body?: ICloverReturnOrderReq): Promise<CloverReturnOrderResModel> {
        const response: AxiosResponse<ICloverReturnOrderRes> = await this.client.post<ICloverReturnOrderRes>(`/v1/orders/${orderId}/returns`, body);

        return plainToClass(CloverReturnOrderResModel, response.data);
    }
}
