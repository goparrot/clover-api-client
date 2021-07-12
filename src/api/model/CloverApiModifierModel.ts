import { Type } from 'class-transformer';
import type { ICloverApiModifier } from '../interface';
import { CloverApiModifierGroupModel } from './CloverApiModifierGroupModel';

export class CloverApiModifierModel implements ICloverApiModifier {
    id: string;
    name?: string;
    alternateName?: string;
    price?: number;

    @Type(() => CloverApiModifierGroupModel)
    modifierGroup?: CloverApiModifierGroupModel;

    quantitySold?: number;
}
