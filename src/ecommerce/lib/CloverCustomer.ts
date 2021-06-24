import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverCustomerResModel, CloverRevokeResModel } from '../model';
import { CloverConfig } from '../../common';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverCustomerReq, ICloverCustomerRes, ICloverRevokeRes, ICloverUpdateCustomerReq } from '../interface';

export class CloverCustomer extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Create a customer.
     * @param {ICloverCustomerReq} data
     */
    async create(data: ICloverCustomerReq): Promise<CloverCustomerResModel> {
        const response: AxiosResponse<ICloverCustomerRes> = await this.client.post<ICloverCustomerRes>('/v1/customers', data);

        return plainToClass(CloverCustomerResModel, response.data);
    }

    /**
     * Update a customer.
     * @param {string} customerId Unique customer ID.
     * @param {ICloverUpdateCustomerReq} data
     */
    async update(customerId: string, data: ICloverUpdateCustomerReq): Promise<CloverCustomerResModel> {
        const response: AxiosResponse<ICloverCustomerRes> = await this.client.put<ICloverCustomerRes>(`/v1/customers/${customerId}`, data);

        return plainToClass(CloverCustomerResModel, response.data);
    }

    /**
     * Revoke a card.
     * @param {string} customerId Unique customer ID.
     * @param {string} cardId UUID of the card to revoke.
     */
    async revoke(customerId: string, cardId: string): Promise<CloverRevokeResModel> {
        const response: AxiosResponse<ICloverRevokeRes> = await this.client.delete<ICloverRevokeRes>(`/v1/customers/${customerId}/sources/${cardId}`);

        return plainToClass(CloverRevokeResModel, response.data);
    }
}
