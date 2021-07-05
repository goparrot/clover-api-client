import type { ICloverApiOrderRef } from './ICloverApiOrderRef';
import type { ICloverApiDevice } from './ICloverApiDevice';
import type { ICloverApiPayment } from './ICloverApiPayment';
import type { ICloverApiEmployee } from './ICloverApiEmployee';
import type { ICloverApiOverrideMerchantTender } from './ICloverApiOverrideMerchantTender';
import type { ICloverApiServiceChargeAmount } from './ICloverApiServiceChargeAmount';
import type { ICloverApiItemReference } from './ICloverApiItemReference';

export interface ICloverApiRefund {
    /* Unique identifier. */
    id?: string;
    orderRef?: ICloverApiOrderRef;
    /* Device which processed the transaction for this refund, a 128-bit UUID, not a normal base-13 Clover ID. */
    device?: ICloverApiDevice;
    /* Total amount refunded, including tax and tip. */
    amount?: number;
    /* Tax amount refunded. */
    taxAmount?: number;
    /* Tip amount refunded. */
    tipAmount?: number;
    /* The time when the refund was recorded on the server. */
    createdTime?: number;
    /* The time when the refund was recorded on the client. */
    clientCreatedTime?: number;
    payment?: ICloverApiPayment;
    employee?: ICloverApiEmployee;
    lineItems?: ICloverApiItemReference;
    overrideMerchantTender?: ICloverApiOverrideMerchantTender;
    serviceChargeAmount?: ICloverApiServiceChargeAmount;
}
