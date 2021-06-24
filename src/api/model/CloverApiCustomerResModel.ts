import { Type } from 'class-transformer';
import type { ICloverApiCustomerRes } from '../interface';
import { CloverApiCustomerAddressElemResModel } from './CloverApiCustomerAddressElemResModel';
import { CloverApiCustomerCardElemResModel } from './CloverApiCustomerCardElemResModel';
import { CloverApiCustomerEmailAddressElemResModel } from './CloverApiCustomerEmailAddressElemResModel';
import { CloverApiCustomerMetadataResModel } from './CloverApiCustomerMetadataResModel';
import { CloverApiCustomerPhoneNumberElemResModel } from './CloverApiCustomerPhoneNumberElemResModel';
import { CloverApiCustomerOrderResModel } from './CloverApiCustomerOrderResModel';
import { CloverApiCustomerMerchantResModel } from './CloverApiCustomerMerchantResModel';

export class CloverApiCustomerResModel implements ICloverApiCustomerRes {
    @Type(() => CloverApiCustomerAddressElemResModel)
    addresses?: CloverApiCustomerAddressElemResModel;
    @Type(() => CloverApiCustomerCardElemResModel)
    cards?: CloverApiCustomerCardElemResModel;
    @Type(() => CloverApiCustomerEmailAddressElemResModel)
    emailAddresses?: CloverApiCustomerEmailAddressElemResModel;
    @Type(() => CloverApiCustomerMetadataResModel)
    metadata?: CloverApiCustomerMetadataResModel;
    @Type(() => CloverApiCustomerPhoneNumberElemResModel)
    phoneNumbers?: CloverApiCustomerPhoneNumberElemResModel;
    @Type(() => CloverApiCustomerOrderResModel)
    orders?: CloverApiCustomerOrderResModel;
    @Type(() => CloverApiCustomerMerchantResModel)
    merchant?: CloverApiCustomerMerchantResModel;
    firstName?: string;
    lastName?: string;
    customerSince: number;
    href: string;
    id: string;
    marketingAllowed: boolean;
}
