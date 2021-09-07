import { Type } from 'class-transformer';
import type { ICloverApiInventoryCategory, ICloverApiInventoryListRes } from '../interface';
import { CloverApiInventoryCategoryModel } from './CloverApiInventoryCategoryModel';

export class CloverApiInventoryCategoryListResModel implements ICloverApiInventoryListRes<ICloverApiInventoryCategory> {
    @Type(() => CloverApiInventoryCategoryModel)
    elements: CloverApiInventoryCategoryModel[];
}
