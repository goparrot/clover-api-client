import type { ICloverApiItemReference } from './ICloverApiItemReference';
import type { ICloverApiDiscountElement } from './ICloverApiDiscountElement';
import type { ICloverApiModificationElement } from './ICloverApiModificationElement';
import type { ICloverApiTaxRateElement } from './ICloverApiTaxRateElement';

export interface ICloverApiCheckoutLineItemRes {
    item: ICloverApiItemReference;
    name: string;
    price: number;
    discounts: ICloverApiDiscountElement;
    exchanged: boolean;
    modifications: ICloverApiModificationElement;
    refunded: boolean;
    isRevenue: boolean;
    taxRates: ICloverApiTaxRateElement;
}
