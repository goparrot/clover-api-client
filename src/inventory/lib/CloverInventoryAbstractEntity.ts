import type { AxiosResponse } from 'axios';
import type { ICloverAxiosConfig } from '../../common';
import { CloverConfig, mapParams, paginationMaxLimit } from '../../common';
import type {
    ICloverApiInventoryParam,
    ICloverInventoryCategory,
    ICloverInventoryItem,
    ICloverInventoryListRes,
    ICloverInventoryModifier,
    ICloverInventoryModifierGroup,
    ICloverInventoryTaxRate,
} from '../interface';

export class CloverInventoryAbstractEntity<
    T extends ICloverInventoryCategory | ICloverInventoryItem | ICloverInventoryModifier | ICloverInventoryModifierGroup | ICloverInventoryTaxRate,
> extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get all inventory of a specific entity type ( items, categories, modifiers or modifier groups)
     * @param {string} endpoint - the API endpoint that need to be called
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory entity
     */
    async listRaw(endpoint: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<T[]> {
        const response: AxiosResponse<ICloverInventoryListRes<T>> = await this.client.get<ICloverInventoryListRes<T>>(endpoint, {
            params: mapParams(params),
        });

        return response.data.elements;
    }

    async getAllRaw(endpoint: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<T[]> {
        const allItems: T[] = [];
        const requestParams = { ...params, offset: 0, limit: paginationMaxLimit };
        let itemsList: T[] = [];
        do {
            itemsList = await this.listRaw(endpoint, requestParams);
            allItems.push(...itemsList);
            requestParams.offset = requestParams.offset + requestParams.limit;
        } while (itemsList.length === paginationMaxLimit);

        return allItems;
    }

    async getOneRaw(endpoint: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<T> {
        const response: AxiosResponse<T> = await this.client.get<T>(endpoint, { params: params });

        return response.data;
    }
}
