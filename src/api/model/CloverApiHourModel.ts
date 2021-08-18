import { Type } from 'class-transformer';
import type { ICloverApiHour } from '../interface';
import { CloverApiReferenceModel } from './CloverApiReferenceModel';
import { CloverApiTimeFormatModel } from './CloverApiTimeFormatModel';

export class CloverApiHourModel implements ICloverApiHour {
    /* Unique identifier. */
    id?: string;
    /* Friendly name to describe the hours. */
    name?: string;
    @Type(() => CloverApiReferenceModel)
    reference?: CloverApiReferenceModel;
    @Type(() => CloverApiTimeFormatModel)
    sunday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    monday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    tuesday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    wednesday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    thursday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    friday?: CloverApiTimeFormatModel[];
    @Type(() => CloverApiTimeFormatModel)
    saturday?: CloverApiTimeFormatModel[];
}
