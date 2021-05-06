import { Type } from 'class-transformer';
import { CloverApiCustomerEmailAddressResModel } from './CloverApiCustomerEmailAddressResModel';

export class CloverApiCustomerEmailAddressElemResModel {
    @Type(() => CloverApiCustomerEmailAddressResModel)
    elements: CloverApiCustomerEmailAddressResModel[];
}
