export interface ICloverCaptureReq {
    /**
     * Charge amount in the smallest monetary unit of the merchant's currency.
     * If you do not specify an amount, the total of the original charge is captured.
     */
    amount?: number;
    /**
     * Email address which receives the charge receipt.
     * This value overrides any previously-specified email address for the charge.
     * Receipts are not sent in sandbox.
     */
    receipt_email?: string;
}
