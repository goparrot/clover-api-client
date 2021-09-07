import type { CloverTaxTypeEnum } from '../../enum';
import type { ICloverApiInventoryAbstractItem } from './ICloverApiInventoryAbstractItem';
import type { ICloverApiInventoryItem } from './ICloverApiInventoryItem';
import type { ICloverApiInventoryListRes } from './ICloverApiInventoryListRes';

export interface ICloverApiInventoryTaxRate extends ICloverApiInventoryAbstractItem {
    /**
     * For percentage based discounts like sales tax
     */
    rate: number;
    isDefault: boolean;
    /**
     * For a flat tax like recycling redemption fee, expressed as number of cents
     */
    taxAmount?: number;
    /**
     * Timestamp when tax rate was last deleted
     */
    deletedTime?: number;
    /**
     *
     */
    modifiedTime?: number;
    /**
     * Items associated with this tax rate
     * When returned as expand for items include only id of the item
     * When returned as main item with expand param equal to items include entire CloverApiInventoryItem object
     */
    items?: ICloverApiInventoryListRes<ICloverApiInventoryItem>;
    /**
     * to support Argentina's tax type
     */
    taxType?: CloverTaxTypeEnum;
}
