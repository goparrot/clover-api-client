import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../../common';
import type { ICloverApiInventoryParam, ICloverApiInventoryItem } from '../interface';
import { CloverApiInventoryItemModel } from '../model';
import { CloverApiInventoryAbstractEntity } from './CloverApiInventoryAbstractEntity';

export class CloverApiInventoryItem extends CloverApiInventoryAbstractEntity<ICloverApiInventoryItem> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory categories
     * @param {string} merchantId - the id of the merchant that returned inventory categories belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory categories
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/items`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }

    /**
     * Get all inventory items
     * @param merchantId - the id of the merchant that returned items belongs to
     * @param params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory items
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/items`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }

    async getOne(merchantId: string, itemPosId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel> {
        const result = await this.getOneRaw(`/v3/merchants/${merchantId}/items/${itemPosId}`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }
}
