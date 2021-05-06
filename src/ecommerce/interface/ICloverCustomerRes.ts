import type { ICloverCustomerSource } from './ICloverCustomerSource';
import type { ICloverShipping } from './ICloverShipping';

export interface ICloverCustomerRes {
    /* Creation time of the object (Unix timestamp in milliseconds). */
    created: number;
    /* Three-letter ISO 4217 currency code (in lowercase). */
    currency: string;
    /* UUID of the customer's default payment source. */
    default_source?: string;
    /**
     * For an invoice charged automatically, delinquent is true if the invoice's charge fails.
     * For an invoice that is sent to the customer, delinquent is true if the invoice is not paid by its due date.
     */
    delinquent?: boolean;
    /* Container for user-facing information about the object. */
    description?: string;
    /* Customer email address. */
    email: string;
    /* Unique ID. */
    id: string;
    /* Set of key-value pairs used for storing additional information about the object in a structured format. */
    metadata?: Record<string, any>;
    /* Object type. Objects with the same type have the same value. */
    object: string;
    /* Customer's payment sources if available. */
    sources: ICloverCustomerSource;
    shipping: Partial<ICloverShipping>;
}
