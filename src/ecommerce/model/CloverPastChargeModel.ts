import { Type } from 'class-transformer';
import type { ICloverPastCharge } from '../interface';
import { CloverOutComeModel } from './CloverOutComeModel';
import { CloverPastChargeSourceModel } from './CloverPastChargeSourceModel';

export class CloverPastChargeModel implements ICloverPastCharge {
    amount: number;
    amount_refunded: number;
    captured: boolean;
    created: number;
    currency: string;
    id: string;
    order: string;
    @Type(() => CloverOutComeModel)
    outcome: CloverOutComeModel;
    paid: boolean;
    refunded: boolean;
    @Type(() => CloverPastChargeSourceModel)
    source: CloverPastChargeSourceModel;
    status: string;
}
