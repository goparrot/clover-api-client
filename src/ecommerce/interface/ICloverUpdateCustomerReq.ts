import type { ICloverCustomerReq } from './ICloverCustomerReq';

export interface ICloverUpdateCustomerReq extends Partial<ICloverCustomerReq> {
    email: string;
}
