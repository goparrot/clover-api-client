import type { ICloverApiInventoryModifier } from '../interface';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';

export class CloverApiInventoryModifierModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryModifier {
    price: number;
    modifierGroup: { id: string };
    alternateName?: string;
    available: boolean;
}
