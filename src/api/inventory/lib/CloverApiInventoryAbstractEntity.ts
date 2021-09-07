import type { AxiosResponse } from 'axios';
import type { ICloverAxiosConfig } from '../../../common';
import { CloverConfig, paginationMaxLimit } from '../../../common';
import { mapParams } from '../util';
import type { ICloverApiInventoryParam, ICloverApiInventoryListRes, ICloverApiExtendData } from '../interface';

export class CloverApiInventoryAbstractEntity<T extends ICloverApiExtendData> extends CloverConfig {
    constructor(config: ICloverAxiosConfig) {
        super(config);
    }

    /**
     * Get a list of a specific entity type ( items, categories, modifiers or modifier groups)
     * @param {string} endpoint - the API endpoint that need to be called
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory entity
     */
    async listRaw(endpoint: string, params: Partial<ICloverApiInventoryParam> = {}): Promise<T[]> {
        const response: AxiosResponse<ICloverApiInventoryListRes<T>> = await this.client.get<ICloverApiInventoryListRes<T>>(endpoint, {
            params: mapParams(params),
        });

        return response.data.elements;
    }

    /**
     * Get all results of a specific entity type ( items, categories, modifiers or modifier groups).
     * ! Offset and limit params are overridden to paginate and unite all results from list request
     * @param {string} endpoint - the API endpoint that need to be called
     * @param {Partial<ICloverApiInventoryParam>} params - the list of filters and expand options that provide
     * the ability to get less or more information related to inventory entity
     */
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
        const response: AxiosResponse<T> = await this.client.get<T>(endpoint, { params });

        return response.data;
    }
}
