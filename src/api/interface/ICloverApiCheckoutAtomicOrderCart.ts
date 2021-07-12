import type { ICloverApiDiscountElement } from './ICloverApiDiscountElement';
import type { ICloverApiMerchant } from './ICloverApiMerchant';
import type { ICloverApiCheckoutLineItemElement } from './ICloverApiCheckoutLineItemElement';

export interface ICloverApiCheckoutAtomicOrderCart {
    discounts: ICloverApiDiscountElement;
    lineItems: ICloverApiCheckoutLineItemElement;
    merchant: ICloverApiMerchant;
}
