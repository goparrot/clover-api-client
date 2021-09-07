import { Type } from 'class-transformer';
import type { ICloverApiInventoryItemStock } from '../interface';
import { CloverApiItemModel } from '../../model/CloverApiItemModel';

export class CloverApiInventoryItemStockModel implements ICloverApiInventoryItemStock {
    @Type(() => CloverApiItemModel)
    item: CloverApiItemModel;
    modifiedTime: number;
    quantity: number;
    stockCount: number;
}
