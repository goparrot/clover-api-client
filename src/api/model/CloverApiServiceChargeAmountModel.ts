import type { ICloverApiServiceChargeAmount } from '../interface';

export class CloverApiServiceChargeAmountModel implements ICloverApiServiceChargeAmount {
    id?: string;
    name?: string;
    amount?: string;
}
