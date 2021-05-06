import { Type } from 'class-transformer';
import type { ICloverCharge } from '../interface';
import { CloverAddressModel } from './CloverAddressModel';
import { CloverBillingDetailModel } from './CloverBillingDetailModel';
import { CloverFailureCodeModel } from './CloverFailureCodeModel';
import { CloverRefundModel } from './CloverRefundModel';
import { CloverSoftDescriptorModel } from './CloverSoftDescriptorModel';
import { CloverStoredCredentialModel } from './CloverStoredCredentialModel';

export class CloverOptionalChargeFieldModel implements Partial<ICloverCharge> {
    @Type(() => CloverAddressModel)
    address?: CloverAddressModel;
    amount_refunded?: number;
    auth_code?: string;
    @Type(() => CloverBillingDetailModel)
    billing_details?: CloverBillingDetailModel;
    carrier?: string;
    city?: string;
    country?: string;
    description?: string;
    external_reference_id?: string;
    @Type(() => CloverFailureCodeModel)
    failure_code?: CloverFailureCodeModel;
    failure_message?: string;
    line1?: string;
    line2?: string;
    livemode?: boolean;
    metadata?: Record<string, any>;
    name?: string;
    object?: string;
    payment_method?: string;
    phone?: string;
    postal_code?: string;
    receipt_email?: string;
    receipt_number?: string;
    receipt_url?: string;
    ref_num?: string;
    refunded?: boolean;
    @Type(() => CloverRefundModel)
    refunds?: CloverRefundModel;
    @Type(() => CloverSoftDescriptorModel)
    soft_descriptor?: CloverSoftDescriptorModel;
    state?: string;
    @Type(() => CloverStoredCredentialModel)
    stored_credentials?: CloverStoredCredentialModel;
    tax_amount?: number;
    tip_amount?: number;
    tracking_number?: string;
    warning_message?: string;
}
