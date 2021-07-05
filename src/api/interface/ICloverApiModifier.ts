import type { ICloverApiModifierGroup } from './ICloverApiModifierGroup';

export interface ICloverApiModifier {
    /* Unique identifier. */
    id: string;
    /* Name of the modifier. */
    name?: string;
    /* Alternate name of the modifier. */
    alternateName?: string;
    /* Additional cost when used. */
    price?: number;
    modifierGroup?: ICloverApiModifierGroup;
    /* This is only used in reports. The count of how many of these modifiers that were sold. */
    quantitySold?: number;
}
