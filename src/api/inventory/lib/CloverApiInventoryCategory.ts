import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../../common';
import type { ICloverApiInventoryParam, ICloverApiInventoryCategory } from '../interface';
import { CloverApiInventoryCategoryModel } from '../model';
import { CloverApiInventoryAbstractEntity } from './CloverApiInventoryAbstractEntity';

export class CloverApiInventoryCategory extends CloverApiInventoryAbstractEntity<ICloverApiInventoryCategory> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory categories
     * @param {string} merchantId - the id of the merchant that returned inventory categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory categories
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryCategoryModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverApiInventoryCategoryModel, result);
    }

    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryCategoryModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverApiInventoryCategoryModel, result);
    }
}
