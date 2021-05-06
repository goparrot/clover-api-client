import { Type } from 'class-transformer';
import { CloverOptionalChargeFieldModel } from './CloverOptionalChargeFieldModel';
import { CloverChargeSourceModel } from './CloverChargeSourceModel';
import { CloverOutComeModel } from './CloverOutComeModel';

export class CloverChargeResModel extends CloverOptionalChargeFieldModel {
    id: string;
    amount: number;
    currency: string;
    created: number;
    captured: boolean;
    @Type(() => CloverOutComeModel)
    outcome: CloverOutComeModel;
    paid: boolean;
    status: string;
    amount_refunded: number;
    ref_num: string;
    @Type(() => CloverChargeSourceModel)
    source: CloverChargeSourceModel;
}
