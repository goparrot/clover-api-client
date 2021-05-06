import type { CloverBillPayIndicatorEnum } from '../enum';

export interface ICloverInstallmentInfo {
    /**
     * Whether the transaction is Recurring or Installment payment.
     * @see CloverBillPayIndicatorEnum
     */
    bill_pay_indicator: CloverBillPayIndicatorEnum;
    /* Invoice number of the installment or recurring transaction. */
    invoice_number: string;
    /* Description of the installment or recurring transaction. */
    description: string;
}
