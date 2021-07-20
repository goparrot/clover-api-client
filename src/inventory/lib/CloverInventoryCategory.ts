import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverApiInventoryParam, ICloverInventoryCategory } from '../interface';
import { CloverInventoryCategoryModel } from '../model';
import { CloverInventoryAbstractEntity } from './CloverInventoryAbstractEntity';

export class CloverInventoryCategory extends CloverInventoryAbstractEntity<ICloverInventoryCategory> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory categories
     * @param {string} merchantId - the id of the merchant that returned inventory categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory categories
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryCategoryModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverInventoryCategoryModel, result);
    }

    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryCategoryModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverInventoryCategoryModel, result);
    }
}
