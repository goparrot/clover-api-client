import type { CloverCardBrandEnum } from '../../common';
import type { ICloverPastChargeSource } from '../interface';

export class CloverPastChargeSourceModel implements ICloverPastChargeSource {
    brand: CloverCardBrandEnum;
    first6: string;
    id: string;
    last4: string;
}
