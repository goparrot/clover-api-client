export interface ICloverApiPayment {
    /* Unique identifier; TBD this is confusing because it's used as either line item id or payment id. */
    id: string;
    /* Percent of this line item covered by this payment. */
    percentage?: number;
    /* Bin this line item payment was for. */
    binName?: number;
    /* Payment has been refunded. */
    refunded?: boolean;
}
