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
     * Get a list of inventory categories. Can be used offset and limit params to paginate through results
     * @param {string} merchantId - the id of the merchant that returned inventory categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory categories
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryCategoryModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverApiInventoryCategoryModel, result);
    }

    /**
     * Get all inventory Categories. Offset and limit params are overridden to get all results
     * @param {string} merchantId - the id of the merchant that returned inventory Categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory Categories
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryCategoryModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/categories`, params);

        return plainToClass(CloverApiInventoryCategoryModel, result);
    }
}
