import type { CloverInventoryTaxRateTypeEnum } from '../enum';
import type { ICloverInventoryAbstractItem } from './ICloverInventoryAbstractItem';
import type { ICloverInventoryItem } from './ICloverInventoryItem';
import type { ICloverInventoryListRes } from './ICloverInventoryListRes';

export interface ICloverInventoryTaxRate extends ICloverInventoryAbstractItem {
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
     * When returned as main item with expand param equal to items include entire CloverInventoryItem object
     */
    items?: ICloverInventoryListRes<ICloverInventoryItem>;
    /**
     * to support Argentina's tax type
     */
    taxType?: CloverInventoryTaxRateTypeEnum;
}
