import type { CloverTaxTypeEnum } from '../enum';
import type { ICloverApiItem } from './ICloverApiItem';

export interface ICloverApiTaxRate {
    rate?: number;
    id?: string;
    name: string;
    taxType?: CloverTaxTypeEnum;
    isDefault?: boolean;
    items?: ICloverApiItem[];
    taxAmount?: number;
    /* Timestamp when tax rate was last deleted. */
    deletedTime?: number;
    /* Timestamp when tax rate was last modified. */
    modifiedTime?: number;
}
