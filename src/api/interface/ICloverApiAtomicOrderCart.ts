import type { ICloverApiServiceCharge } from './ICloverApiServiceCharge';
import type { ICloverApiDiscount } from './ICloverApiDiscount';
import type { ICloverApiOrderType } from './ICloverApiOrderType';
import type { ICloverApiLineItem } from './ICloverApiLineItem';

export interface ICloverApiAtomicOrderCart {
    title?: string;
    /* An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps. */
    note?: string;
    /* Optional service charge (gratuity) applied to this order.*/
    serviceCharge?: ICloverApiServiceCharge;
    /**
     * Amount or percentage discounts applied to the order subtotal.
     * To retrieve discounts applied to individual items, use the Get all line items for an order endpoint with the discounts field expanded (v3/merchants/{mId}/orders/{orderId}/line_items?expand=discounts).
     */
    discounts?: ICloverApiDiscount[];
    lineItems: ICloverApiLineItem[];
    orderType?: ICloverApiOrderType;
    /**
     * Whether similar line items should be grouped together on the receipt that this order generates.
     * Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
     */
    groupLineItems?: boolean;
}
