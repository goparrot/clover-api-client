import type { ICloverApiElementPayment } from './ICloverApiElementPayment';

export interface ICloverApiMerchantPayment {
    elements?: ICloverApiElementPayment[];
    href: string;
}
