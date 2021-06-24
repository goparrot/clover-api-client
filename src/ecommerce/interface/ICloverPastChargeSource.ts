import type { CloverCardBrandEnum } from '../../common';

export interface ICloverPastChargeSource {
    id: string;
    brand: CloverCardBrandEnum;
    first6: string;
    last4: string;
}
