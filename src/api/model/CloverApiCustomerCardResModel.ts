import { Type } from 'class-transformer';
import type { CloverCardBrandEnum } from '../../common';
import type { ICloverApiCustomerCardRes } from '../interface';
import { CloverApiCustomerModel } from './CloverApiCustomerModel';
import { CloverApiCustomerCardAdditionalInfoResModel } from './CloverApiCustomerCardAdditionalInfoResModel';

export class CloverApiCustomerCardResModel implements ICloverApiCustomerCardRes {
    @Type(() => CloverApiCustomerCardAdditionalInfoResModel)
    additionalInfo: CloverApiCustomerCardAdditionalInfoResModel;
    cardType: CloverCardBrandEnum;
    @Type(() => CloverApiCustomerModel)
    customer: CloverApiCustomerModel;
    expirationDate: string;
    first6: string;
    id: string;
    last4: string;
    modifiedTime: number;
    token: string;
    tokenType: string;
}
