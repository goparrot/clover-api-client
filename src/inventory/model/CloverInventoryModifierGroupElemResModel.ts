import { Type } from 'class-transformer';
import type { ICloverInventoryListRes, ICloverInventoryModifierGroup } from '../interface';
import { CloverInventoryModifierGroupModel } from './CloverInventoryModifierGroupModel';

export class CloverInventoryModifierGroupElemResModel implements ICloverInventoryListRes<ICloverInventoryModifierGroup> {
    @Type(() => CloverInventoryModifierGroupModel)
    elements: CloverInventoryModifierGroupModel[];
}
