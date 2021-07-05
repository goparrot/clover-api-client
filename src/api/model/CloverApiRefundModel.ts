import { Type } from 'class-transformer';
import type { ICloverApiRefund } from '../interface';
import { CloverApiOrderRefModel } from './CloverApiOrderRefModel';
import { CloverApiDeviceModel } from './CloverApiDeviceModel';
import { CloverApiPaymentModel } from './CloverApiPaymentModel';
import { CloverApiEmployeeModel } from './CloverApiEmployeeModel';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';
import { CloverApiOverrideMerchantTenderModel } from './CloverApiOverrideMerchantTenderModel';
import { CloverApiServiceChargeAmountModel } from './CloverApiServiceChargeAmountModel';

export class CloverApiRefundModel implements ICloverApiRefund {
    id?: string;

    @Type(() => CloverApiOrderRefModel)
    orderRef?: CloverApiOrderRefModel;

    @Type(() => CloverApiDeviceModel)
    device?: CloverApiDeviceModel;

    amount?: number;
    taxAmount?: number;
    tipAmount?: number;
    createdTime?: number;
    clientCreatedTime?: number;

    @Type(() => CloverApiPaymentModel)
    payment?: CloverApiPaymentModel;

    @Type(() => CloverApiEmployeeModel)
    employee?: CloverApiEmployeeModel;

    @Type(() => CloverApiItemReferenceModel)
    lineItems?: CloverApiItemReferenceModel;

    @Type(() => CloverApiOverrideMerchantTenderModel)
    overrideMerchantTender?: CloverApiOverrideMerchantTenderModel;

    @Type(() => CloverApiServiceChargeAmountModel)
    serviceChargeAmount?: CloverApiServiceChargeAmountModel;
}
