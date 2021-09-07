import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../../common';
import type { ICloverApiInventoryParam, ICloverApiInventoryTaxRate } from '../interface';
import { CloverApiInventoryTaxRateModel } from '../model';
import { CloverApiInventoryAbstractEntity } from './CloverApiInventoryAbstractEntity';

export class CloverApiInventoryTaxRate extends CloverApiInventoryAbstractEntity<ICloverApiInventoryTaxRate> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get a list of inventory Tax Rates. Offset and limit params are overridden to get all results
     * @param {string} merchantId - the id of the merchant that returned inventory Tax Rates belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory Tax Rates
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryTaxRateModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/tax_rates`, params);

        return plainToClass(CloverApiInventoryTaxRateModel, result);
    }

    /**
     * Get all inventory Tax Rates. Offset and limit params are overridden to get all results
     * @param {string} merchantId - the id of the merchant that returned inventory Tax Rates belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory Tax Rates
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryTaxRateModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/tax_rates`, params);

        return plainToClass(CloverApiInventoryTaxRateModel, result);
    }
}
