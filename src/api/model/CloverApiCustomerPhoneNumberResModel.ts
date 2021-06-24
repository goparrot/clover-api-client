import { Type } from 'class-transformer';
import type { ICloverApiCustomerPhoneNumberRes } from '../interface';
import { CloverApiCustomerModel } from './CloverApiCustomerModel';

export class CloverApiCustomerPhoneNumberResModel implements ICloverApiCustomerPhoneNumberRes {
    @Type(() => CloverApiCustomerModel)
    customer: CloverApiCustomerModel;
    id: string;
    phoneNumber: string;
}
