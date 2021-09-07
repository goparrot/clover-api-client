import type { ICloverApiInventoryItemStock } from '../interface';
import type { CloverApiItemModel } from '../../model/CloverApiItemModel';

export class CloverApiInventoryItemStockModel implements ICloverApiInventoryItemStock {
    item: CloverApiItemModel;
    modifiedTime: number;
    quantity: number;
    stockCount: number;
}
