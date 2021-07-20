import { Type } from 'class-transformer';
import type { ICloverInventoryCategory, ICloverInventoryListRes } from '../interface';
import { CloverInventoryCategoryModel } from './CloverInventoryCategoryModel';

export class CloverInventoryCategoryElemResModel implements ICloverInventoryListRes<ICloverInventoryCategory> {
    @Type(() => CloverInventoryCategoryModel)
    elements: CloverInventoryCategoryModel[];
}
