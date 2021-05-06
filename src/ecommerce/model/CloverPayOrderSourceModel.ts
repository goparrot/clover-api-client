import type { CloverCardBrandEnum } from '../../common';
import { CloverOptionalSourceModel } from './CloverOptionalSourceModel';

export class CloverPayOrderSourceModel extends CloverOptionalSourceModel {
    brand: CloverCardBrandEnum;
    exp_month: string;
    exp_year: string;
    first6: string;
    last4: string;
}
