import { Type } from 'class-transformer';
import type { ICloverApiInventoryItem } from '../interface';
import type { CloverApiInventoryItemPriceTypeEnum } from '../enum';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryCategoryElemResModel } from './CloverApiInventoryCategoryElemResModel';
import { CloverApiInventoryModifierGroupElemResModel } from './CloverApiInventoryModifierGroupElemResModel';

export class CloverApiInventoryItemModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryItem {
    cost: number;
    defaultTaxRates: boolean;
    available: boolean;
    hidden: boolean;
    isRevenue: boolean;
    modifiedTime: number;
    price: number;
    priceType: CloverApiInventoryItemPriceTypeEnum;
    stockCount: number;
    autoManage: boolean;
    code?: string;
    sku?: string;
    unitName?: string;
    @Type(() => CloverApiInventoryCategoryElemResModel)
    categories?: CloverApiInventoryCategoryElemResModel;
    @Type(() => CloverApiInventoryModifierGroupElemResModel)
    modifierGroups?: CloverApiInventoryModifierGroupElemResModel;
}
