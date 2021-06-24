import type { ICloverAddress } from '../interface';

export class CloverAddressModel implements ICloverAddress {
    city: string;
    country: string;
    line1: string;
    line2: string;
    postal_code: string;
    state: string;
}
