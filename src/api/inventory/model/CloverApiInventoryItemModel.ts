import { Type } from 'class-transformer';
import type { ICloverApiInventoryItem } from '../interface';
import type { CloverApiInventoryItemPriceTypeEnum } from '../enum';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryCategoryListResModel } from './CloverApiInventoryCategoryListResModel';
import { CloverApiInventoryModifierGroupListResModel } from './CloverApiInventoryModifierGroupListResModel';
import { CloverApiInventoryTaxRateListResModel } from './CloverApiInventoryTaxRateListResModel';
import { CloverApiInventoryItemStockModel } from './CloverApiInventoryItemStockModel';

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
    @Type(() => CloverApiInventoryCategoryListResModel)
    categories?: CloverApiInventoryCategoryListResModel;
    @Type(() => CloverApiInventoryModifierGroupListResModel)
    modifierGroups?: CloverApiInventoryModifierGroupListResModel;
    @Type(() => CloverApiInventoryTaxRateListResModel)
    taxRates?: CloverApiInventoryTaxRateListResModel;
    @Type(() => CloverApiInventoryItemStockModel)
    itemStock?: CloverApiInventoryItemStockModel;
}
