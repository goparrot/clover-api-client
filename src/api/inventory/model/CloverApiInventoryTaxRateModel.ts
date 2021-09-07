import { Type } from 'class-transformer';
import type { ICloverApiInventoryTaxRate } from '../interface';
import type { CloverTaxTypeEnum } from '../../enum';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryItemListResModel } from './CloverApiInventoryItemListResModel';

export class CloverApiInventoryTaxRateModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryTaxRate {
    rate: number;
    isDefault: boolean;
    deletedTime?: number;
    modifiedTime?: number;
    taxAmount?: number;
    taxType?: CloverTaxTypeEnum;
    @Type(() => CloverApiInventoryItemListResModel)
    items?: CloverApiInventoryItemListResModel;
}
