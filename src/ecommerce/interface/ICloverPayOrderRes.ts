import type { CloverEcomindEnum } from '../enum';
import type { ICloverOrderItem } from './ICloverOrderItem';
import type { ICloverOrderTransition } from './ICloverOrderTransition';
import type { ICloverPayOrderSource } from './ICloverPayOrderSource';
import type { ICloverOrderShippingMethod } from './ICloverOrderShippingMethod';
import type { ICloverOrderReturn } from './ICloverOrderReturn';
import type { ICloverPastCharge } from './ICloverPastCharge';

export interface ICloverPayOrderRes {
    /**
     * Total order amount in the smallest monetary unit of the merchant's currency.
     */
    amount: number;
    /**
     * Amount currently paid toward the order total.
     */
    amount_paid: number;
    /**
     * Total tax amount for the order.
     */
    tax_amount?: number;
    /**
     * Amount currently paid toward the tax total.
     */
    tax_amount_paid?: number;
    /**
     * Amount paid in tips.
     */
    tip_amount?: number;
    charge: string;
    status_transitions: ICloverOrderTransition;
    ecomind?: CloverEcomindEnum;
    /**
     * Amount paid in payment surcharge.
     */
    surcharge_amount?: number;
    amount_returned?: number;
    /**
     * If available, the authorization code - successful charge code when order is paid.
     */
    auth_code: string;
    /**
     * If available, the reference number returned from the payment gateway if the transaction is successful.
     */
    ref_num: string;
    /**
     * If available, detailed warning information about the order or associated charge (for example, missing original transaction id for c-token).
     */
    warning_message?: string;
    /**
     * Creation time of the object (Unix timestamp in milliseconds.
     */
    created: number;
    /**
     * Three-letter ISO 4217 currency code (in lowercase).
     */
    currency: string;
    /**
     * Email address of the customer placing the order.
     */
    email?: string;
    /**
     * An ID, such as an invoice or PO number, that is passed to the merchant's gateway and ultimately appears in settlement records.
     * Format supported for US, spaces in between are allowed and including spaces length max to be 12 including alphanumeric characters.
     */
    external_reference_id?: string;
    /**
     * Unique ID.
     */
    id: string;
    items: ICloverOrderItem[];
    /* Set to true if the object is in production. Set to false if the object is in sandbox. */
    livemode?: boolean;
    /* Set of key-value pairs used for storing additional information about the object in a structured format.*/
    metadata?: Record<string, any>;
    /* Object type. Objects with the same type have the same value. */
    object: string;
    returns?: ICloverOrderReturn;
    selected_shipping_method?: string;
    shipping_methods?: ICloverOrderShippingMethod;
    source: ICloverPayOrderSource;
    /**
     * Current order status
     */
    status: string;
    past_charges?: ICloverPastCharge[];
}
