import type { ICloverApiAtomicOrderCart } from './ICloverApiAtomicOrderCart';

export interface ICloverApiAtomicOrderReq {
    /* The order cart to put items, discounts, modifications and order-related information. */
    orderCart: ICloverApiAtomicOrderCart;
}
