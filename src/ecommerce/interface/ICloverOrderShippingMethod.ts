export interface ICloverOrderShippingMethod {
    /* Total amount in the smallest monetary unit of the merchant's currency. */
    amount?: number;
    /* Three-letter ISO 4217 currency code (in lowercase). */
    currency?: string;
    /* Container for user-facing information about the object. */
    description?: string;
    /* Unique object ID. */
    id?: string;
}
