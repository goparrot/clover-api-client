import type { ICloverApiCustomer } from './ICloverApiCustomer';

export interface ICloverApiCustomerEmailAddressRes {
    id: string;
    emailAddress: string;
    primaryEmail: boolean;
    customer: ICloverApiCustomer;
}
