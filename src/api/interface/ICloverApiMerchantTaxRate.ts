import type { ICloverApiElementTaxRate } from './ICloverApiElementTaxRate';

export interface ICloverApiMerchantTaxRate {
    elements?: ICloverApiElementTaxRate[];
    href: string;
}
