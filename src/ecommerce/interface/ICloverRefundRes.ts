import type { CloverRefundStatusEnum } from '../enum';

export interface ICloverRefundRes {
    /* Total amount of the refund in the smallest monetary unit of the merchant's currency. */
    amount: number;
    /* Creation time of the object (Unix timestamp in milliseconds). */
    created: number;
    /* Object type. Objects with the same type have the same value. */
    object: string;
    /* Charge ID*/
    charge: string;
    /* Three-letter ISO 4217 currency code (in lowercase). */
    currency?: string;
    /* (Only for non-card refunds) Container for user-facing information about the object. */
    description?: string;
    /**
     * An ID, such as an invoice or PO number, that is passed to the merchant's gateway and ultimately appears in settlement records.
     * Format supported for US, spaces in between are allowed and including spaces length max to be 12 including alphanumeric characters.
     */
    external_reference_id?: string;
    /* Explanation of why the refund cannot be performed. */
    failure_reason?: string;
    /* Unique object ID. */
    id: string;
    /* Set of key-value pairs used for storing additional information about the object in a structured format. */
    metadata?: Record<string, any>;
    /* Reason for the refund. */
    reason?: string;
    /* Transaction number that appears on the receipt emailed for this charge. */
    receipt_number?: string;
    /**
     * Refund status (for credit card refunds, succeeded or failed; for other refund types, pending, succeeded, failed, or canceled).
     * @see CloverRefundStatusEnum
     */
    status: CloverRefundStatusEnum;
}
