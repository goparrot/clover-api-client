import { Type } from 'class-transformer';
import type { ICloverApiInventoryModifierGroup } from '../interface';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';
import { CloverApiInventoryModifierListResModel } from './CloverApiInventoryModifierListResModel';
import { CloverApiInventoryItemListResModel } from './CloverApiInventoryItemListResModel';

export class CloverApiInventoryModifierGroupModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryModifierGroup {
    showByDefault: boolean;
    modifierIds?: string;
    maxAllowed: number;
    minRequired?: number;
    alternateName?: string;
    @Type(() => CloverApiInventoryModifierListResModel)
    modifiers?: CloverApiInventoryModifierListResModel;
    @Type(() => CloverApiInventoryItemListResModel)
    items?: CloverApiInventoryItemListResModel;
}
