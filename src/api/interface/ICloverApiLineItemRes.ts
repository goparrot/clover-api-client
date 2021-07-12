import type { ICloverApiOrderRef } from './ICloverApiOrderRef';
import type { ICloverApiItemReference } from './ICloverApiItemReference';
import type { ICloverApiTaxRateElement } from './ICloverApiTaxRateElement';
import type { ICloverApiDiscountElement } from './ICloverApiDiscountElement';

export interface ICloverApiLineItemRes {
    id: string;
    orderRef: ICloverApiOrderRef;
    item: ICloverApiItemReference;
    name: string;
    price: number;
    printed: boolean;
    createdTime: number;
    orderClientCreatedTime: number;
    exchanged: boolean;
    refunded: boolean;
    isRevenue: boolean;
    taxRates: ICloverApiTaxRateElement;
    discounts?: ICloverApiDiscountElement;
}
