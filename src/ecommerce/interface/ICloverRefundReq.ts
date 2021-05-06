import type { CloverReasonEnum } from '../enum';

export interface ICloverRefundReq {
    /* Unique ID of the charge to refund. */
    charge: string;
    /* Refund amount in cents. You can only refund the remaining, un refunded amount of the charge. */
    amount: number;
    /**
     * An ID, such as an invoice or PO number, that is passed to the merchant's gateway and ultimately appears in settlement records.
     * Format supported for US, spaces in between are allowed and including spaces length max to be 12 including alphanumeric characters.
     */
    external_reference_id?: string;
    /**
     * User-selected explanation for the refund.
     * @see CloverReasonEnum
     */
    reason?: CloverReasonEnum;
}
