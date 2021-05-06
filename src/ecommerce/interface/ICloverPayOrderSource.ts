import type { CloverCardBrandEnum } from '../../common';
import type { ICloverCardReq } from './ICloverCardReq';

export interface ICloverPayOrderSource extends Partial<ICloverCardReq> {
    exp_month: string;
    exp_year: string;
    last4: string;
    first6: string;
    brand: CloverCardBrandEnum;
}
