import { Type } from 'class-transformer';
import type { ICloverPayOrderRes, ICloverPastCharge } from '../interface';
import type { CloverEcomindEnum } from '../enum';
import { CloverOrderItemModel } from './CloverOrderItemModel';
import { CloverOrderReturnModel } from './CloverOrderReturnModel';
import { CloverOrderShippingMethodModel } from './CloverOrderShippingMethodModel';
import { CloverPayOrderSourceModel } from './CloverPayOrderSourceModel';
import { CloverOrderTransitionModel } from './CloverOrderTransitionModel';

export class CloverPayOrderResModel implements ICloverPayOrderRes {
    amount: number;
    amount_paid: number;
    amount_returned?: number;
    auth_code: string;
    charge: string;
    created: number;
    currency: string;
    ecomind?: CloverEcomindEnum;
    email?: string;
    external_reference_id?: string;
    id: string;
    @Type(() => CloverOrderItemModel)
    items: CloverOrderItemModel[];
    livemode?: boolean;
    metadata?: Record<string, any>;
    object: string;
    ref_num: string;
    @Type(() => CloverOrderReturnModel)
    returns?: CloverOrderReturnModel;
    selected_shipping_method?: string;
    @Type(() => CloverOrderShippingMethodModel)
    shipping_methods?: CloverOrderShippingMethodModel;
    @Type(() => CloverPayOrderSourceModel)
    source: CloverPayOrderSourceModel;
    status: string;
    @Type(() => CloverOrderTransitionModel)
    status_transitions: CloverOrderTransitionModel;
    surcharge_amount?: number;
    tax_amount?: number;
    tax_amount_paid?: number;
    tip_amount?: number;
    warning_message?: string;
    past_charges?: ICloverPastCharge[];
}
