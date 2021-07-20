import { Type } from 'class-transformer';
import type { ICloverInventoryItem } from '../interface';
import type { CloverInventoryItemPriceTypeEnum } from '../enum';
import { CloverInventoryAbstractItemModel } from './CloverInventoryAbstractItemModel';
import { CloverInventoryCategoryElemResModel } from './CloverInventoryCategoryElemResModel';
import { CloverInventoryModifierGroupElemResModel } from './CloverInventoryModifierGroupElemResModel';

export class CloverInventoryItemModel extends CloverInventoryAbstractItemModel implements ICloverInventoryItem {
    cost: number;
    defaultTaxRates: boolean;
    available: boolean;
    hidden: boolean;
    isRevenue: boolean;
    modifiedTime: number;
    price: number;
    priceType: CloverInventoryItemPriceTypeEnum;
    stockCount: number;
    autoManage: boolean;
    code?: string;
    sku?: string;
    unitName?: string;
    @Type(() => CloverInventoryCategoryElemResModel)
    categories?: CloverInventoryCategoryElemResModel;
    @Type(() => CloverInventoryModifierGroupElemResModel)
    modifierGroups?: CloverInventoryModifierGroupElemResModel;
}
