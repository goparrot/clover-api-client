import { Type } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryModifier } from '../interface';
import { CloverApiInventoryModifierModel } from './CloverApiInventoryModifierModel';

export class CloverApiInventoryModifierElemResModel implements ICloverApiInventoryListRes<ICloverApiInventoryModifier> {
    @Type(() => CloverApiInventoryModifierModel)
    elements: CloverApiInventoryModifierModel[];
}
