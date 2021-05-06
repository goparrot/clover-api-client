import { Type } from 'class-transformer';
import type { ICloverCustomerRes } from '../interface';
import { CloverCustomerSourceModel } from './CloverCustomerSourceModel';
import { CloverShippingModel } from './CloverShippingModel';

export class CloverCustomerResModel implements ICloverCustomerRes {
    created: number;
    currency: string;
    object: string;
    default_source?: string;
    delinquent?: boolean;
    description?: string;
    email: string;
    id: string;
    metadata?: Record<string, any>;
    @Type(() => CloverShippingModel)
    shipping: CloverShippingModel;
    @Type(() => CloverCustomerSourceModel)
    sources: CloverCustomerSourceModel;
}
