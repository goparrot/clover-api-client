import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverRefundListResModel, CloverRefundResModel } from '../model';
import { CloverConfig } from '../../common';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverQueryRefundParam, ICloverRefundListRes, ICloverRefundReq, ICloverRefundRes } from '../interface';

export class CloverRefund extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Create a refund.
     * @param {ICloverRefundReq} data
     */
    async create(data: ICloverRefundReq): Promise<CloverRefundResModel> {
        const response: AxiosResponse<ICloverRefundRes> = await this.client.post<ICloverRefundRes>('/v1/refunds', data);

        return plainToClass(CloverRefundResModel, response.data);
    }

    /**
     * Get a refund.
     * @param {string} refundId UUID of the refund to retrieve.
     */
    async retrieve(refundId: string): Promise<CloverRefundResModel> {
        const response: AxiosResponse<ICloverRefundRes> = await this.client.get<ICloverRefundRes>(`/v1/refunds/${refundId}`);

        return plainToClass(CloverRefundResModel, response.data);
    }

    /**
     * Get a refund list.
     * @param {Partial<ICloverQueryRefundParam>} params
     */
    async list(params: Partial<ICloverQueryRefundParam> = {}): Promise<CloverRefundListResModel[]> {
        const response: AxiosResponse<ICloverRefundListRes[]> = await this.client.get<ICloverRefundListRes[]>(`/v1/refunds`, {
            params,
        });

        return plainToClass(CloverRefundListResModel, response.data);
    }
}
