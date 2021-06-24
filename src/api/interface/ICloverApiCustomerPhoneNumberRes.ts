import type { ICloverApiCustomer } from './ICloverApiCustomer';

export interface ICloverApiCustomerPhoneNumberRes {
    id: string;
    phoneNumber: string;
    customer: ICloverApiCustomer;
}
