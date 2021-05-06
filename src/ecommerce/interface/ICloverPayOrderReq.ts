import type { CloverEcomindEnum } from '../enum';
import type { ICloverTender } from './ICloverTender';

export interface ICloverPayOrderReq {
    /**
     * UUID of the customer being charged for the order.
     * If specified, this customer is charged instead of the customer associated with the order during order creation.
     * Either a source or customer is required if no customer is associated with the order.
     */
    customer?: string;
    amount?: number;
    /**
     * Indicates whether the card data used for a charge was entered by the customer (ecom) or merchant (moto)
     */
    ecomind?: CloverEcomindEnum;
    /**
     * Email address of the customer placing the order (required if not previously specified for the order)
     */
    email?: string;
    /**
     * Specify fields in the response for expansion
     */
    expand?: string[];
    /**
     * An ID, such as an invoice or PO number, that is passed to the merchant's gateway and ultimately appears in settlement records.
     * Format supported for US, spaces in between are allowed and including spaces length max to be 12 including alphanumeric characters.
     */
    external_reference_id?: string;
    /**
     * Set of key-value pairs (limited to 500 characters) that you can attach to the object.
     * This parameter is useful for storing additional information about the object in a structured format.
     */
    metadata?: Record<string, number | boolean | string>;
    /**
     * A token or a source's ID. Either a source or customer is required if no customer is associated with the order.
     * Otherwise, the specified source will be charged instead of the customer attached to the order.
     * It can also be alternate_tender.
     */
    source?: string;
    /**
     * Amount paid in tips.
     */
    tip_amount?: number;
    /**
     * Custom tender that can be used to make charge or pay for the order.
     */
    tender?: Partial<ICloverTender>;
}
