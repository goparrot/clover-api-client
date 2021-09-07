import { Type } from 'class-transformer';
import type { ICloverApiInventoryCategory } from '../interface';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryItemElemResModel } from './CloverApiInventoryItemElemResModel';

export class CloverApiInventoryCategoryModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryCategory {
    sortOrder: number;
    modifiedTime: number;
    @Type(() => CloverApiInventoryItemElemResModel)
    items?: CloverApiInventoryItemElemResModel;
    deleted?: boolean | undefined;
    canonical?: { id: string } | undefined;
}
