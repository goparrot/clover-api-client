import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../../common';
import type { ICloverApiInventoryParam, ICloverApiInventoryModifierGroup } from '../interface';
import { CloverApiInventoryModifierGroupModel } from '../model';
import { CloverApiInventoryAbstractEntity } from './CloverApiInventoryAbstractEntity';

export class CloverApiInventoryModifierGroups extends CloverApiInventoryAbstractEntity<ICloverApiInventoryModifierGroup> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get a list of inventory Modifiers Groups. Can be used offset and limit params to paginate through all results
     * @param {string} merchantId - the id of the merchant that returned modifier groups belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory modifier groups
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryModifierGroupModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/modifier_groups`, params);

        return plainToClass(CloverApiInventoryModifierGroupModel, result);
    }

    /**
     * Get all inventory Modifiers Groups
     * @param {string} merchantId  - the id of the merchant that returned modifier groups belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory modifier groups
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryModifierGroupModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/modifier_groups`, params);

        return plainToClass(CloverApiInventoryModifierGroupModel, result);
    }
}
