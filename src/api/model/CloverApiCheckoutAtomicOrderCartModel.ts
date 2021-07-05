import { Type } from 'class-transformer';
import type { ICloverApiCheckoutAtomicOrderCart } from '../interface';
import { CloverApiDiscountElementModel } from './CloverApiDiscountElementModel';
import { CloverApiMerchantModel } from './CloverApiMerchantModel';
import { CloverApiCheckoutLineItemElementModel } from './CloverApiCheckoutLineItemElementModel';

export class CloverApiCheckoutAtomicOrderCartModel implements ICloverApiCheckoutAtomicOrderCart {
    @Type(() => CloverApiDiscountElementModel)
    discounts: CloverApiDiscountElementModel;

    @Type(() => CloverApiCheckoutLineItemElementModel)
    lineItems: CloverApiCheckoutLineItemElementModel;

    @Type(() => CloverApiMerchantModel)
    merchant: CloverApiMerchantModel;
}
