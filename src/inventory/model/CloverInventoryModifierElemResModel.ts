import { Type } from 'class-transformer';
import type { ICloverInventoryListRes, ICloverInventoryModifier } from '../interface';
import { CloverInventoryModifierModel } from './CloverInventoryModifierModel';

export class CloverInventoryModifierElemResModel implements ICloverInventoryListRes<ICloverInventoryModifier> {
    @Type(() => CloverInventoryModifierModel)
    elements: CloverInventoryModifierModel[];
}
