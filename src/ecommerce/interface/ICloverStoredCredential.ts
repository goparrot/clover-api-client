import type { ICloverInstallmentInfo } from './ICloverInstallmentInfo';

export interface ICloverStoredCredential {
    /**
     * Whether the transaction is the FIRST or SUBSEQUENT for the same payment card.
     * Valid Note - Mastercard transactions only support SUBSEQUENT transactions for stored credentials feature.
     */
    sequence: string;
    /* Whether transaction is scheduled or part of an installment. */
    is_scheduled: boolean;
    /* This field is used only for Discover subsequent transactions. */
    cardbrand_original_amount: string;
    /* Whether it's MERCHANT initiated or explicitly consented by CARDHOLDER. */
    initiator: string;
    /**
     * Installment information.
     * @see ICloverInstallmentInfo
     */
    installment_info: ICloverInstallmentInfo;
}
