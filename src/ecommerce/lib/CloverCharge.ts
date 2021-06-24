import { plainToClass } from 'class-transformer';
import type { AxiosResponse } from 'axios';
import { CloverChargeModel, CloverChargeResModel } from '../model';
import { CloverConfig } from '../../common';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverCaptureReq, ICloverCharge, ICloverChargeReq, ICloverChargeRes, ICloverQueryChargeParam } from '../interface';

export class CloverCharge extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Create a charge.
     * @param {ICloverChargeReq} data
     */
    async create(data: ICloverChargeReq): Promise<CloverChargeResModel> {
        const response: AxiosResponse<ICloverChargeRes> = await this.client.post<ICloverChargeRes>('/v1/charges', data, {
            headers: { 'idempotency-key': data.idempotencyKey },
        });

        return plainToClass(CloverChargeResModel, response.data);
    }

    /**
     * Capture a charge.
     * @param {string} chargeId UUID of the charge to be captured.
     * @param {ICloverCaptureReq} data
     */
    async capture(chargeId: string, data: ICloverCaptureReq = {}): Promise<CloverChargeModel> {
        const response: AxiosResponse<ICloverCharge> = await this.client.post<ICloverCharge>(`/v1/charges/${chargeId}/capture`, data);

        return plainToClass(CloverChargeModel, response.data);
    }

    /**
     * Get a charge.
     * @param {string} chargeId
     */
    async retrieve(chargeId: string): Promise<CloverChargeModel> {
        const response: AxiosResponse<ICloverCharge> = await this.client.get<ICloverCharge>(`/v1/charges/${chargeId}`);

        return plainToClass(CloverChargeModel, response.data);
    }

    /**
     * Get a charge list.
     * @param {Partial<ICloverQueryChargeParam>} params
     */
    async list(params: Partial<ICloverQueryChargeParam> = {}): Promise<CloverChargeModel[]> {
        const response: AxiosResponse<ICloverCharge[]> = await this.client.get<ICloverCharge[]>(`/v1/charges`, {
            params,
        });

        return plainToClass(CloverChargeModel, response.data);
    }
}
