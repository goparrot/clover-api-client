import type { ICloverOrderShippingMethod } from '../interface';

export class CloverOrderShippingMethodModel implements ICloverOrderShippingMethod {
    amount?: number;
    currency?: string;
    description?: string;
    id?: string;
}
