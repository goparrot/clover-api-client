import type { ICloverApiInventoryModifier } from '../interface';
import type { CloverApiModifierGroupModel } from '../../model/CloverApiModifierGroupModel';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';

export class CloverApiInventoryModifierModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryModifier {
    price: number;
    modifierGroup: CloverApiModifierGroupModel;
    alternateName?: string;
    available: boolean;
}
