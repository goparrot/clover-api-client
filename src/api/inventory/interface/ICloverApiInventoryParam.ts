import type { CloverApiInventoryExpandFieldEnum } from '../enum';
import type { ICloverApiInventoryFilterField } from './ICloverApiInventoryFilterField';

export interface ICloverApiInventoryParamBase {
    /**
     * An array of fields
     */
    expand: Partial<CloverApiInventoryExpandFieldEnum>[];
    /**
     * @default 100, hard limit 1000
     */
    limit: number;
    offset: number;
    /**
     * A comma separated list of fields (ex: "modifierGroups,price")
     */
    orderBy: string;
}

export interface ICloverApiInventoryParam extends ICloverApiInventoryParamBase {
    filter: Partial<ICloverApiInventoryFilterField>;
}

export interface ICloverApiInventoryParamMappedFilters extends ICloverApiInventoryParamBase {
    filter: string[];
}
