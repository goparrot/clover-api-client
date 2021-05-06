import { Type } from 'class-transformer';
import type { ICloverApiCustomerListRes } from '../interface';
import { CloverApiCustomerResModel } from './CloverApiCustomerResModel';

export class CloverApiCustomerListResModel implements ICloverApiCustomerListRes {
    @Type(() => CloverApiCustomerResModel)
    elements: CloverApiCustomerResModel[];
    href: string;
}
