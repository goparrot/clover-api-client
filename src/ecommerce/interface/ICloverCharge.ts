import type { ICloverAddress } from './ICloverAddress';
import type { ICloverBillingDetail } from './ICloverBillingDetail';
import type { ICloverFailureCode } from './ICloverFailureCode';
import type { ICloverOutCome } from './ICloverOutCome';
import type { ICloverRefund } from './ICloverRefund';
import type { ICloverSoftDescriptor } from './ICloverSoftDescriptor';
import type { ICloverSource } from './ICloverSource';
import type { ICloverStoredCredential } from './ICloverStoredCredential';

export interface ICloverCharge {
    /* Unique ID. */
    id: string;
    /* Total charge amount in the smallest monetary unit of the merchant's currency. */
    amount: number;
    /* Three-letter ISO 4217 currency code (in lowercase). */
    currency: string;
    /* Creation time of the object (Unix timestamp in milliseconds). */
    created: number;
    /* For charges not captured when the charge was created, this value will be false if the charge remains un captured or true if it has been captured. */
    captured?: boolean;
    order: string;
    /**
     * Explanation of whether and why the payment was accepted.
     * @see ICloverOutCome
     */
    outcome: ICloverOutCome;
    /* Set to true if the charge is successful or authorized for capture at a later point. */
    paid: boolean;
    /* Payment status */
    status: string;
    /**
     * The payment source charged. This can be a token or an alternate tender.
     * @see ICloverSource
     */
    source: ICloverSource;
    /* Amount paid in taxes. */
    tax_amount?: number;
    /* Amount paid in tips. */
    tip_amount?: number;
    /* Amount refunded in cents. This value can be less than the amount property on the charge if a partial refund is issued.*/
    amount_refunded?: number;
    /* The city, district, suburb, town, or village. */
    city?: string;
    /* Two-letter country code. */
    country?: string;
    /* First line of the address (includes the street address, PO box, or company name). */
    line1?: string;
    /* Second line of the address (includes the apartment, suite, unit, or building number). */
    line2?: string;
    /* ZIP or postal code. */
    postal_code?: string;
    /* The state, county, province, or region. */
    state?: string;
    billing_details?: ICloverBillingDetail;
    /* Container for user-facing information about the object. */
    description?: string;
    /**
     * An ID, such as an invoice or PO number, that is passed to the merchant's gateway and ultimately appears in settlement records.
     * Format supported for US, spaces in between are allowed and including spaces length max to be 12 including alphanumeric characters.
     */
    external_reference_id?: string;
    /* If available, the authorization code - successful charge code. */
    auth_code?: string;
    /* If available, the reference number returned from the payment gateway if the transaction is successful. */
    ref_num?: string;
    /**
     * If available, the error code explaining the reason for the charge failure.
     * @see ICloverFailureCode
     */
    failure_code?: ICloverFailureCode;
    /* If available, detailed information about the reason for the charge failure. */
    failure_message?: string;
    /**
     * If available, detailed warning information about the charge. E.g., missing original transaction id for c-token.
     * This does not cause charge failure or decline.
     */
    warning_message?: string;
    /* Set to true if the object is in production. Set to false if the object is in sandbox. */
    livemode?: boolean;
    /* Set of key-value pairs used for storing additional information about the object in a structured format. */
    metadata?: Record<string, any>;
    /* Object type. Objects with the same type have the same value. */
    object?: string;
    /* Unique ID of the payment method used for the charge. */
    payment_method?: string;
    /* Email address which receives the charge receipt. */
    receipt_email?: string;
    /* Transaction number that appears on the receipt emailed for this charge. The attribute is set to null until a receipt is sent. */
    receipt_number?: string;
    /**
     * URL where the charge receipt can be accessed.
     * The receipt displays the latest state of the charge, including any refunds. If the charge is for an invoice, the receipt is displayed as an invoice.
     */
    receipt_url?: string;
    /* Set to true if the charge is fully refunded or false if only partially refunded. */
    refunded?: boolean;
    /**
     *  List of refunds applied to the charge.
     *  @see ICloverRefund
     */
    refunds?: ICloverRefund;
    /**
     * @see ICloverAddress
     */
    address?: ICloverAddress;
    /* Delivery service used to ship the physical product (DHL, Fedex, US Postal Service, etc.). */
    carrier?: string;
    /* Product recipient's name. */
    name?: string;
    /* Product recipient's phone (including extension). */
    phone?: string;
    /* Shipment number provided by the carrier. Use a comma-separated list for multiple tracking numbers. */
    tracking_number?: string;
    /**
     * Stored Credentials for a transaction.
     * @see ICloverStoredCredential
     */
    stored_credentials?: ICloverStoredCredential;
    /**
     * Soft descriptor for a transaction.
     * @see ICloverSoftDescriptor
     */
    soft_descriptor?: ICloverSoftDescriptor;
}
