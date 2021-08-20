import type { ICloverApiElementPrinter } from './ICloverApiElementPrinter';

export interface ICloverApiMerchantPrinter {
    elements?: ICloverApiElementPrinter[];
    href: string;
}
