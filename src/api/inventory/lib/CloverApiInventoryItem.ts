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
     * Get a list of inventory items. Can be used offset and limit params to paginate through all items
     * @param {string} merchantId - the id of the merchant that returned inventory items belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory items
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/items`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }

    /**
     * Get a list of inventory items. Offset and limit params are overridden to get all results
     * @param {string} merchantId - the id of the merchant that returned inventory items belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory items
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/items`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }

    /**
     * Get specific inventory item.
     * @param {string} merchantId - the id of the merchant that returned inventory item belongs to
     * @param {string} itemPosId - the id of the inventory item
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory item
     */
    async getOne(merchantId: string, itemPosId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryItemModel> {
        const result = await this.getOneRaw(`/v3/merchants/${merchantId}/items/${itemPosId}`, params);

        return plainToClass(CloverApiInventoryItemModel, result);
    }
}
