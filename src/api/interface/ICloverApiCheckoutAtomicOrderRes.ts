import type { ICloverApiCheckoutAtomicOrderCart } from './ICloverApiCheckoutAtomicOrderCart';
import type { ICloverApiTaxSummaryElement } from './ICloverApiTaxSummaryElement';

export interface ICloverApiCheckoutAtomicOrderRes {
    orderCart: ICloverApiCheckoutAtomicOrderCart;
    total: number;
    subtotal: number;
    totalTaxAmount: number;
    taxSummaries: ICloverApiTaxSummaryElement;
    isVat: boolean;
}
