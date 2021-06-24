import type { ICloverApiTimeFormat } from './ICloverApiTimeFormat';
import type { ICloverApiItemCategory } from './ICloverApiItemCategory';

export interface ICloverApiReference {
    /* Unique identifier. */
    id?: string;
    sunday?: ICloverApiTimeFormat[];
    monday?: ICloverApiTimeFormat[];
    tuesday?: ICloverApiTimeFormat[];
    wednesday?: ICloverApiTimeFormat[];
    thursday?: ICloverApiTimeFormat[];
    friday?: ICloverApiTimeFormat[];
    saturday?: ICloverApiTimeFormat[];
    categories: ICloverApiItemCategory[];
}
