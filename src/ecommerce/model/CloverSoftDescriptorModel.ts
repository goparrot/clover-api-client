import type { ICloverSoftDescriptor } from '../interface';

export class CloverSoftDescriptorModel implements ICloverSoftDescriptor {
    city: string;
    country_code: string;
    dba_name: string;
    merchant_contact_info: string;
    postal_code: string;
    region: string;
    street: string;
}
