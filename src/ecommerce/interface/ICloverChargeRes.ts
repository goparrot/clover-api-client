import type { ICloverCharge } from './ICloverCharge';

export interface ICloverChargeRes extends Omit<ICloverCharge, 'order'> {
    amount_refunded: number;
    ref_num: string;
}
