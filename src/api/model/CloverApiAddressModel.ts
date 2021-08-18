import type { ICloverApiAddress } from '../interface';

export class CloverApiAddressModel implements ICloverApiAddress {
    href: string;
    address1?: string;
    city?: string;
    country?: string;
    state?: string;
    zip?: string;
    phoneNumber?: string;
}
