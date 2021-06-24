import { Type } from 'class-transformer';
import { CloverApiCustomerAddressResModel } from './CloverApiCustomerAddressResModel';

export class CloverApiCustomerAddressElemResModel {
    @Type(() => CloverApiCustomerAddressResModel)
    elements: CloverApiCustomerAddressResModel[];
}
