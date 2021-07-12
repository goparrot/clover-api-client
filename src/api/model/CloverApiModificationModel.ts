import { Type } from 'class-transformer';
import type { ICloverApiModification } from '../interface';
import { CloverApiModifierModel } from './CloverApiModifierModel';

export class CloverApiModificationModel implements ICloverApiModification {
    id?: string;
    name?: string;
    alternateName?: string;
    amount?: number;

    @Type(() => CloverApiModifierModel)
    modifier: CloverApiModifierModel;
}
