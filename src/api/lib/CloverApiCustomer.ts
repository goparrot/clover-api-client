import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverConfig } from '../../common';
import type { ICloverAxiosConfig } from '../../common';
import { CloverApiCustomerListResModel, CloverApiCustomerResModel } from '../model';
import type { ICloverApiCustomerRes, ICloverApiCustomerListRes, ICloverApiCustomerParam } from '../interface';

export class CloverApiCustomer extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Returns information for a single customer.
     * @param {string} merchantId
     * @param {string} customerId
     * @param {ICloverApiCustomerParam} params
     */
    async retrieve(merchantId: string, customerId: string, params: Partial<ICloverApiCustomerParam> = {}): Promise<CloverApiCustomerResModel> {
        const response: AxiosResponse<ICloverApiCustomerRes> = await this.client.get<ICloverApiCustomerRes>(
            `/v3/merchants/${merchantId}/customers/${customerId}`,
            {
                params: params.filter ? { ...params, filter: Object.entries(params.filter ?? {}).map(([key, value]) => `${key}=${value}`) } : params,
            },
        );

        return plainToClass(CloverApiCustomerResModel, response.data);
    }

    /**
     * Returns information for a list of customer.
     * @param {string} merchantId
     * @param {Partial<ICloverApiCustomerParam>} params
     */
    async list(merchantId: string, params: Partial<ICloverApiCustomerParam> = {}): Promise<CloverApiCustomerListResModel> {
        const response: AxiosResponse<ICloverApiCustomerListRes> = await this.client.get<ICloverApiCustomerListRes>(`/v3/merchants/${merchantId}/customers`, {
            params: params.filter ? { ...params, filter: Object.entries(params.filter ?? {}).map(([key, value]) => `${key}=${value}`) } : params,
        });

        return plainToClass(CloverApiCustomerListResModel, response.data);
    }

    /**
     * Delete a customer
     * @param {string} merchantId
     * @param {string} customerId
     */
    async delete(merchantId: string, customerId: string): Promise<void> {
        await this.client.delete<void>(`/v3/merchants/${merchantId}/customers/${customerId}`);
    }
}
