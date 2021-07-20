import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverApiInventoryParam, ICloverInventoryTaxRate } from '../interface';
import { CloverInventoryTaxRateModel } from '../model';
import { CloverInventoryAbstractEntity } from './CloverInventoryAbstractEntity';

export class CloverInventoryTaxRate extends CloverInventoryAbstractEntity<ICloverInventoryTaxRate> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory categories
     * @param {string} merchantId - the id of the merchant that returned inventory categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory categories
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryTaxRateModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/tax_rates`, params);

        return plainToClass(CloverInventoryTaxRateModel, result);
    }

    /**
     * Get all inventory items
     * @param merchantId - the id of the merchant that returned items belongs to
     * @param params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory items
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryTaxRateModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/tax_rates`, params);

        return plainToClass(CloverInventoryTaxRateModel, result);
    }
}
