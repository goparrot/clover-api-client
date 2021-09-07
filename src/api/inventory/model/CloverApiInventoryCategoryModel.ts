import { Type } from 'class-transformer';
import type { ICloverApiInventoryCategory } from '../interface';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryItemListResModel } from './CloverApiInventoryItemListResModel';
import type { CloverApiInventoryCanonicalCategoryModel } from './CloverApiInventoryCanonicalCategoryModel';

export class CloverApiInventoryCategoryModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryCategory {
    sortOrder: number;
    modifiedTime: number;
    @Type(() => CloverApiInventoryItemListResModel)
    items?: CloverApiInventoryItemListResModel;
    deleted?: boolean;
    canonical?: CloverApiInventoryCanonicalCategoryModel;
}
