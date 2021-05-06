import { Type } from 'class-transformer';
import { CloverApiCustomerPhoneNumberResModel } from './CloverApiCustomerPhoneNumberResModel';

export class CloverApiCustomerPhoneNumberElemResModel {
    @Type(() => CloverApiCustomerPhoneNumberResModel)
    elements: CloverApiCustomerPhoneNumberResModel[];
}
