import type { ICloverApiReference } from './ICloverApiReference';

export interface ICloverApiHour {
    /* Unique identifier. */
    id?: string;
    /* Friendly name to describe the hours. */
    name?: string;
    reference?: ICloverApiReference;
}
