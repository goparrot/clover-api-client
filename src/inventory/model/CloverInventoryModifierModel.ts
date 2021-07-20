import type { ICloverInventoryModifier } from '../interface';
import { CloverInventoryAbstractItemModel } from './CloverInventoryAbstractItemModel';

export class CloverInventoryModifierModel extends CloverInventoryAbstractItemModel implements ICloverInventoryModifier {
    price: number;
    modifierGroup: { id: string };
    alternateName?: string;
    available: boolean;
}
