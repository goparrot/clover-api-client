import type { ICloverInventoryAbstractItem } from './ICloverInventoryAbstractItem';

export interface ICloverInventoryModifier extends ICloverInventoryAbstractItem {
    /** True if this item is available for sale across all channels */
    available: boolean;
    /** Additional cost when used */
    price: number;
    /** Id of the modifier group that modifier belongs to */
    modifierGroup: { id: string };
    /** Alternate name of the modifier */
    alternateName?: string;
}