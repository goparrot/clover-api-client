import { Type } from 'class-transformer';
import type { ICloverApiInventoryItem, ICloverApiInventoryListRes } from '../interface';
import { CloverApiInventoryItemModel } from './CloverApiInventoryItemModel';

export class CloverApiInventoryItemElemResModel implements ICloverApiInventoryListRes<ICloverApiInventoryItem> {
    @Type(() => CloverApiInventoryItemModel)
    elements: CloverApiInventoryItemModel[];
}
