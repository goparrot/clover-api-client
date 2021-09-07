import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../../common';
import type { ICloverApiInventoryParam, ICloverApiInventoryModifier } from '../interface';
import { CloverApiInventoryModifierModel } from '../model';
import { CloverApiInventoryAbstractEntity } from './CloverApiInventoryAbstractEntity';

export class CloverApiInventoryModifier extends CloverApiInventoryAbstractEntity<ICloverApiInventoryModifier> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get a list of inventory Modifiers. Can be used offset and limit params to paginate through all results
     * @param {string} merchantId - the id of the merchant that returned inventory Modifiers belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory Modifiers
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryModifierModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/modifiers`, params);

        return plainToClass(CloverApiInventoryModifierModel, result);
    }

    /**
     * Get all inventory Modifiers. Offset and limit params are overridden to get all results
     * @param {string} merchantId  - the id of the merchant that returned Modifiers belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory Modifiers
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverApiInventoryModifierModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/modifiers`, params);

        return plainToClass(CloverApiInventoryModifierModel, result);
    }
}
