import { Type } from 'class-transformer';
import type { ICloverApiMerchantPayment } from '../interface';
import { CloverApiElementPaymentModel } from './CloverApiElementPaymentModel';

export class CloverApiMerchantPaymentModel implements ICloverApiMerchantPayment {
    @Type(() => CloverApiElementPaymentModel)
    elements?: CloverApiElementPaymentModel[];

    href: string;
}
