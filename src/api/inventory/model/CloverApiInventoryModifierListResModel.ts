import { Type } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryModifier } from '../interface';
import { CloverApiInventoryModifierModel } from './CloverApiInventoryModifierModel';

export class CloverApiInventoryModifierListResModel implements ICloverApiInventoryListRes<ICloverApiInventoryModifier> {
    @Type(() => CloverApiInventoryModifierModel)
    elements: CloverApiInventoryModifierModel[];
}
