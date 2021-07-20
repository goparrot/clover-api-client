import { Type } from 'class-transformer';
import type { ICloverInventoryTaxRate } from '../interface';
import type { CloverInventoryTaxRateTypeEnum } from '../enum';
import { CloverInventoryAbstractItemModel } from './CloverInventoryAbstractItemModel';
import { CloverInventoryItemElemResModel } from './CloverInventoryItemElemResModel';

export class CloverInventoryTaxRateModel extends CloverInventoryAbstractItemModel implements ICloverInventoryTaxRate {
    rate: number;
    isDefault: boolean;
    deletedTime?: number;
    modifiedTime?: number;
    taxAmount?: number;
    taxType?: CloverInventoryTaxRateTypeEnum;
    @Type(() => CloverInventoryItemElemResModel)
    items?: CloverInventoryItemElemResModel;
}
