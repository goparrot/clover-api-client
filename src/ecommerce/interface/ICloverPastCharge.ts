import type { ICloverOutCome } from './ICloverOutCome';
import type { ICloverPastChargeSource } from './ICloverPastChargeSource';

export interface ICloverPastCharge {
    id: string;
    amount: number;
    amount_refunded: number;
    currency: string;
    created: number;
    captured: boolean;
    order: string;
    outcome: ICloverOutCome;
    paid: boolean;
    refunded: boolean;
    status: string;
    source: ICloverPastChargeSource;
}
