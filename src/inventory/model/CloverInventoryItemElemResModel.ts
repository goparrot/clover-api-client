import { Type } from 'class-transformer';
import type { ICloverInventoryItem, ICloverInventoryListRes } from '../interface';
import { CloverInventoryItemModel } from './CloverInventoryItemModel';

export class CloverInventoryItemElemResModel implements ICloverInventoryListRes<ICloverInventoryItem> {
    @Type(() => CloverInventoryItemModel)
    elements: CloverInventoryItemModel[];
}
