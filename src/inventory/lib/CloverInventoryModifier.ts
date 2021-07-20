import { plainToClass } from 'class-transformer';
import type { ICloverAxiosConfig } from '../../common';
import type { ICloverApiInventoryParam, ICloverInventoryModifier } from '../interface';
import { CloverInventoryModifierModel } from '../model';
import { CloverInventoryAbstractEntity } from './CloverInventoryAbstractEntity';

export class CloverInventoryModifier extends CloverInventoryAbstractEntity<ICloverInventoryModifier> {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory categories
     * @param {string} merchantId - the id of the merchant that returned inventory modifiers belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory modifiers
     */
    async list(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryModifierModel[]> {
        const result = await this.listRaw(`/v3/merchants/${merchantId}/modifiers`, params);

        return plainToClass(CloverInventoryModifierModel, result);
    }

    /**
     * Get all inventory items
     * @param {string} merchantId  - the id of the merchant that returned items belongs to
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory modifiers
     */
    async getAll(merchantId: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<CloverInventoryModifierModel[]> {
        const result = await this.getAllRaw(`/v3/merchants/${merchantId}/modifiers`, params);

        return plainToClass(CloverInventoryModifierModel, result);
    }
}
