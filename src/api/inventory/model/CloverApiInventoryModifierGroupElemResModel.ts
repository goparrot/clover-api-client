import { Type } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryModifierGroup } from '../interface';
import { CloverApiInventoryModifierGroupModel } from './CloverApiInventoryModifierGroupModel';

export class CloverApiInventoryModifierGroupElemResModel implements ICloverApiInventoryListRes<ICloverApiInventoryModifierGroup> {
    @Type(() => CloverApiInventoryModifierGroupModel)
    elements: CloverApiInventoryModifierGroupModel[];
}
