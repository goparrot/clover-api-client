import { Type } from 'class-transformer';
import type { ICloverApiInventoryModifierGroup } from '../interface';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryModifierElemResModel } from './CloverApiInventoryModifierElemResModel';
import { CloverApiInventoryItemElemResModel } from './CloverApiInventoryItemElemResModel';

export class CloverApiInventoryModifierGroupModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryModifierGroup {
    showByDefault: boolean;
    modifierIds?: string;
    maxAllowed: number;
    minRequired?: number;
    alternateName?: string;
    @Type(() => CloverApiInventoryModifierElemResModel)
    modifiers?: CloverApiInventoryModifierElemResModel;
    @Type(() => CloverApiInventoryItemElemResModel)
    items?: CloverApiInventoryItemElemResModel;
}
