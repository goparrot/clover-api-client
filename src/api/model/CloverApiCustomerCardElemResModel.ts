import { Type } from 'class-transformer';
import { CloverApiCustomerCardResModel } from './CloverApiCustomerCardResModel';

export class CloverApiCustomerCardElemResModel {
    @Type(() => CloverApiCustomerCardResModel)
    elements: CloverApiCustomerCardResModel[];
}
