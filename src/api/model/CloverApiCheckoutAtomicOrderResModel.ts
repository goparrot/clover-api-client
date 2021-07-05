import { Type } from 'class-transformer';
import type { ICloverApiCheckoutAtomicOrderRes } from '../interface';
import { CloverApiCheckoutAtomicOrderCartModel } from './CloverApiCheckoutAtomicOrderCartModel';
import { CloverApiTaxSummaryElementModel } from './CloverApiTaxSummaryElementModel';

export class CloverApiCheckoutAtomicOrderResModel implements ICloverApiCheckoutAtomicOrderRes {
    @Type(() => CloverApiCheckoutAtomicOrderCartModel)
    orderCart: CloverApiCheckoutAtomicOrderCartModel;

    subtotal: number;

    @Type(() => CloverApiTaxSummaryElementModel)
    taxSummaries: CloverApiTaxSummaryElementModel;

    total: number;
    totalTaxAmount: number;
    isVat: boolean;
}
