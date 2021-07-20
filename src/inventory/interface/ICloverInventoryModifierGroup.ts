import type { ICloverInventoryItem } from './ICloverInventoryItem';
import type { ICloverInventoryAbstractItem } from './ICloverInventoryAbstractItem';
import type { ICloverInventoryModifier } from './ICloverInventoryModifier';

export interface ICloverInventoryModifierGroup extends ICloverInventoryAbstractItem {
    /** Whether employees will be automatically prompted to add modifiers from this category when using Register */
    showByDefault: boolean;
    /** An ordered, comma-separated list of modifier ids in this group. */
    modifierIds?: string;
    /** The minimum amount of modifiers from this group that must be applied to associated lineItems when using Register */
    minRequired?: number;
    /** The maximum amount of modifiers from this group that can be applied to associated lineItems when using Register */
    maxAllowed: number;
    alternateName?: string;
    /** List of modifiers linked to current modifier group.
     * Will be returned if will be requested using query parameter **expand** with value **modifiers**
     */
    modifiers?: { elements: ICloverInventoryModifier[] };
    /** List of inventory items linked to current modifier group.
     * Will be returned if will be requested using query parameter **expand** with value **items**
     */
    items?: { elements: ICloverInventoryItem[] };
}
