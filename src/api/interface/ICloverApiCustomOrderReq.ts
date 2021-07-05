import type { CloverApiPaymentStateEnum, CloverPayTypeEnum } from '../enum';
import type { ICloverApiCustomerRes } from './ICloverApiCustomerRes';
import type { ICloverApiServiceCharge } from './ICloverApiServiceCharge';
import type { ICloverApiOrderDiscount } from './ICloverApiOrderDiscount';

export interface ICloverApiCustomOrderReq {
    /* Currency of this order. For example,"USD". */
    currency?: string;
    /* List of customers associated with this order. */
    customers?: Partial<ICloverApiCustomerRes>[];
    /* The employee who took this order. */
    employee?: { id: string };
    /* Total price of the order in cents. */
    total?: number;
    /* External reference id if present in the order. */
    externalReferenceId?: string;
    /* Is this order paid or not. */
    paymentState?: CloverApiPaymentStateEnum;
    title?: string;
    /* An arbitrary string with information about this order, may be printed on the order receipt and displayed in apps. */
    note?: string;
    /* If true then this order should not have taxes applied to it. */
    taxRemoved?: boolean;
    /* This order was created by merchant with VAT enabled. */
    isVat?: boolean;
    /**
     * A String generally describing the state of the Order.
     * When creating an Order, the value must be manually set to "open".
     * If no value is set, the state defaults to null, which indicates an unfinished Order.
     * An unfinished order is not displayed in user interfaces and can only be retrieved by its id.
     * Non-null values such as "open" and "locked" are not checked or enforced by the server.
     * Therefore, these values should not be used to make any logical decisions about the Order.
     */
    state?: string;
    /**
     * Whether this order represents a manual transaction.
     * A manual transaction is a transaction that has an arbitrary amount defined and is not associated with any inventory items.
     * For example, the Clover Sale App and Clover Manual Transaction App create manual transactions.
     * A manual transactions will have a single associated line item to hold the sale amount, but the generated receipt will display this differently to indicate that it is not considered a typical order with inventory items.
     */
    manualTransaction?: boolean;
    /**
     * Whether similar line items should be grouped together on the receipt that this order generates.
     * Item "similarity" is based on items having matching values for a set of properties including price, modifiers, and discounts.
     */
    groupLineItems?: boolean;
    /**
     * Whether this order was created in test mode.
     * Payments made against test orders are not processed.
     * Test mode orders can be deleted from the Orders App on the merchant's device or web dashboard (https://www.clover.com/orders/m/{mId}/orders).
     * They will also be deleted when the device sends a POST to the /v2/merchant/{mId}/orders/delete_all_tests endpoint.
     */
    testMode?: boolean;
    /**
     * Possible values: SPLITGUEST, SPLIT_ITEM, SPLIT_CUSTOM, FULL.
     * During the payment flow, if the user chooses to split the payment for this order, this field will be set to one of the SPLIT* values to indicate how the full amount should be split.
     * If the user chooses to pay for the order in full with one payment, then this field will be FULL
     */
    payType?: CloverPayTypeEnum;
    /* Creation timestamp. */
    createdTime?: number;
    /* The time at which the client created this order. */
    clientCreatedTime?: number;
    /* Last modified time of the order. */
    modifiedTime?: number;
    deletedTimestamp?: number;
    serviceCharge?: ICloverApiServiceCharge;
    discounts?: ICloverApiOrderDiscount[];
}
