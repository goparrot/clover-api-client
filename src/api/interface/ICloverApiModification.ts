import type { ICloverApiModifier } from './ICloverApiModifier';

export interface ICloverApiModification {
    id?: string;
    /* the name of the modifier when it was applied. */
    name?: string;
    alternateName?: string;
    /* the additional cost of the modifier when it was applied. */
    amount?: number;
    modifier: ICloverApiModifier;
}
