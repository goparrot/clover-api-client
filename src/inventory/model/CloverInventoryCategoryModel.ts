import { Type } from 'class-transformer';
import type { ICloverInventoryCategory } from '../interface';
import { CloverInventoryAbstractItemModel } from './CloverInventoryAbstractItemModel';
import { CloverInventoryItemElemResModel } from './CloverInventoryItemElemResModel';

export class CloverInventoryCategoryModel extends CloverInventoryAbstractItemModel implements ICloverInventoryCategory {
    sortOrder: number;
    modifiedTime: number;
    @Type(() => CloverInventoryItemElemResModel)
    items?: CloverInventoryItemElemResModel;
    deleted?: boolean | undefined;
    canonical?: { id: string } | undefined;
}
