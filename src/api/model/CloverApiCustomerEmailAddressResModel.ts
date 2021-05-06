import { Type } from 'class-transformer';
import type { ICloverApiCustomerEmailAddressRes } from '../interface';
import { CloverApiCustomerModel } from './CloverApiCustomerModel';

export class CloverApiCustomerEmailAddressResModel implements ICloverApiCustomerEmailAddressRes {
    @Type(() => CloverApiCustomerModel)
    customer: CloverApiCustomerModel;
    emailAddress: string;
    id: string;
    primaryEmail: boolean;
}
