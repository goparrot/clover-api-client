import type { ICloverApiItem } from './ICloverApiItem';
import type { ICloverApiElementPrinter } from './ICloverApiElementPrinter';

export interface ICloverApiTag {
    /* Unique identifier. */
    id?: string;
    /* Tag name. */
    name?: string;
    /* True if tag is a summary label in the reporting app. */
    showInReporting?: boolean;
    items?: ICloverApiItem[];
    printers?: ICloverApiElementPrinter[];
}
