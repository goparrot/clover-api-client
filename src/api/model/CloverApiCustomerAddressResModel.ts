import type { ICloverApiCustomerAddressRes } from '../interface';

export class CloverApiCustomerAddressResModel implements ICloverApiCustomerAddressRes {
    address1: string;
    address2: string;
    address3: string;
    city: string;
    country: string;
    phoneNumber: string;
    state: string;
    zip: string;
}
