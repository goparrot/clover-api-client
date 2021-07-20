import { Type } from 'class-transformer';
import type { ICloverInventoryModifierGroup } from '../interface';
import { CloverInventoryAbstractItemModel } from './CloverInventoryAbstractItemModel';
import { CloverInventoryModifierElemResModel } from './CloverInventoryModifierElemResModel';
import { CloverInventoryItemElemResModel } from './CloverInventoryItemElemResModel';

export class CloverInventoryModifierGroupModel extends CloverInventoryAbstractItemModel implements ICloverInventoryModifierGroup {
    showByDefault: boolean;
    modifierIds?: string;
    maxAllowed: number;
    minRequired?: number;
    alternateName?: string;
    @Type(() => CloverInventoryModifierElemResModel)
    modifiers?: CloverInventoryModifierElemResModel;
    @Type(() => CloverInventoryItemElemResModel)
    items?: CloverInventoryItemElemResModel;
}
