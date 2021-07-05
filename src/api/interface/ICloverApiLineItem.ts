import type { ICloverApiDiscount } from './ICloverApiDiscount';
import type { ICloverApiOrderLevelDiscount } from './ICloverApiOrderLevelDiscount';
import type { ICloverApiModification } from './ICloverApiModification';
import type { ICloverApiExchangedLineItem } from './ICloverApiExchangedLineItem';
import type { ICloverApiTag } from './ICloverApiTag';
import type { ICloverApiPrintGroup } from './ICloverApiPrintGroup';
import type { ICloverApiPayment } from './ICloverApiPayment';
import type { ICloverApiTaxRate } from './ICloverApiTaxRate';
import type { ICloverApiRefund } from './ICloverApiRefund';
import type { ICloverApiItemReference } from './ICloverApiItemReference';

export interface ICloverApiLineItem {
    /**
     * A reference to the inventory item that was used to create this line item.
     * Note that since this a reference the item can be changed and deleted any time such that it no longer matches this line item.
     */
    item: ICloverApiItemReference;
    /* Line item name.*/
    name?: string;
    /* Alternate name of the line item.*/
    alternateName?: string;
    /**
     * Price of the item, typically in cents of merchant currency.
     * When unit quantity is not null then this is the price for a single unit and is not the complete price.
     */
    price?: number;
    /* Price of item after adding all modifications. This is used only for reporting.*/
    priceWithModifiers?: number;
    /**
     * Price of item after adding all modifications and subtracting all line item and order level discounts.
     * This is used only for reporting.
     */
    priceWithModifiersAndItemAndOrderDiscounts?: number;
    /**
     * Unit quantity if this line item is priced by quantity, or null if the item is not priced by quantity.
     * The value is a fixed-point integer with scaling factor of 1000 (e.g. if charging by ounces then the value should be set to 2500 for 2.5 ounces).
     * To compute the complete price perform the following calculation: PRICE * (UNIT QTY / 1000).
     */
    unitQty?: number;
    /* Unit name (e.g. oz, lb, etc) if priced by unit, otherwise null. */
    unitName?: string;
    itemCode?: string;
    note?: string;
    /* True if this line item has been printed out on an order printer at least once already. */
    printed?: boolean;
    exchangedLineItem?: ICloverApiExchangedLineItem;
    binName?: string;
    userData?: string;
    createdTime?: number;
    orderClientCreatedTime?: number;
    discounts?: ICloverApiDiscount[];
    /**
     * List of order level discounts attributed to this line item.
     * Amounts are rounded to the nearest penny. This is for reporting purposes only.
     * These rounding approximates are not used when calculating the transaction.
     */
    orderLevelDiscounts?: ICloverApiOrderLevelDiscount[];
    /* Unnamed fixed discount amount in cents. Or, in reporting, this may be the calculated sum of all the line item discounts.*/
    discountAmount?: number;
    /* The calculated sum of order level discounts attributed, approximately to the nearest cent, to this the line item. This is only used in reporting.*/
    orderLevelDiscountAmount?: number;
    exchanged?: boolean;
    /* List of references to modifications applied to this line item. */
    modifications?: ICloverApiModification[];
    tags?: ICloverApiTag[];
    refunded?: boolean;
    refund?: ICloverApiRefund;
    /* True if this item should be counted as revenue, for example gift cards and donations would not. */
    isRevenue?: boolean;
    /* Tax rates that apply to this line item. */
    taxRates?: ICloverApiTaxRate[];
    /* Payments that apply to this line item. */
    payments?: ICloverApiPayment[];
    /* Revenue collected for this. This field is only used in reporting. */
    revenueAmount?: number;
    /* Quantity sold for this line item. This field is only used in reporting. */
    quantitySold?: number;
    printGroup?: ICloverApiPrintGroup;
}
