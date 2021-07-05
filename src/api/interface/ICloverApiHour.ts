import type { ICloverApiReference } from './ICloverApiReference';
import type { ICloverApiTimeFormat } from './ICloverApiTimeFormat';

export interface ICloverApiHour {
    /* Unique identifier. */
    id?: string;
    /* Friendly name to describe the hours. */
    name?: string;
    reference?: ICloverApiReference;
    sunday?: ICloverApiTimeFormat[];
    monday?: ICloverApiTimeFormat[];
    tuesday?: ICloverApiTimeFormat[];
    wednesday?: ICloverApiTimeFormat[];
    thursday?: ICloverApiTimeFormat[];
    friday?: ICloverApiTimeFormat[];
    saturday?: ICloverApiTimeFormat[];
}
