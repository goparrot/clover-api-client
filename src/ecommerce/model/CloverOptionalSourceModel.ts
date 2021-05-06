import type { ICloverSource } from '../interface';

export class CloverOptionalSourceModel implements Partial<ICloverSource> {
    address_city?: string;
    address_country?: string;
    address_line1?: string;
    address_line1_check?: string;
    address_line2?: string;
    address_state?: string;
    address_zip?: string;
    address_zip_check?: string;
    country?: string;
    cvc_check?: string;
    exp_month?: string;
    exp_year?: string;
    fingerprint?: string;
    funding?: string;
    name?: string;
    object?: string;
}
