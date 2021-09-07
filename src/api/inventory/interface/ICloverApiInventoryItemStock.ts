import type { ICloverApiItem } from '../../interface';

export interface ICloverApiInventoryItemStock {
    item: ICloverApiItem;
    stockCount: number;
    quantity: number;
    modifiedTime: number;
}
