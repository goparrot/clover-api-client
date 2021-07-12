import type { ICloverApiPayment } from '../interface';

export class CloverApiPaymentModel implements ICloverApiPayment {
    binName?: number;
    id: string;
    percentage?: number;
    refunded?: boolean;
}
