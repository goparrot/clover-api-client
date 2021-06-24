import type { ICloverApiTaxRate } from './ICloverApiTaxRate';

export interface ICloverApiCustomLineItemReq {
    price: number;
    name?: string;
    taxRates?: ICloverApiTaxRate[];
}
