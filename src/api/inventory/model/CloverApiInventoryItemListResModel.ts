import { Type } from 'class-transformer';
import type { ICloverApiInventoryItem, ICloverApiInventoryListRes } from '../interface';
import { CloverApiInventoryItemModel } from './CloverApiInventoryItemModel';

export class CloverApiInventoryItemListResModel implements ICloverApiInventoryListRes<ICloverApiInventoryItem> {
    @Type(() => CloverApiInventoryItemModel)
    elements: CloverApiInventoryItemModel[];
}
