import type { ICloverApiCustomerCardRes } from './ICloverApiCustomerCardRes';
import type { ICloverApiCustomerPhoneNumberRes } from './ICloverApiCustomerPhoneNumberRes';
import type { ICloverApiCustomerMetadataRes } from './ICloverApiCustomerMetadataRes';
import type { ICloverApiCustomerEmailAddressRes } from './ICloverApiCustomerEmailAddressRes';
import type { ICloverApiCustomerAddressRes } from './ICloverApiCustomerAddressRes';

export interface ICloverApiCustomerRes {
    href: string;
    id: string;
    marketingAllowed: boolean;
    customerSince: number;
    merchant?: {
        id: string;
    };
    lastName?: string;
    firstName?: string;
    orders?: {
        id: string;
    };
    addresses?: { elements: ICloverApiCustomerAddressRes[] };
    emailAddresses?: { elements: ICloverApiCustomerEmailAddressRes[] };
    phoneNumbers?: { elements: ICloverApiCustomerPhoneNumberRes[] };
    cards?: { elements: ICloverApiCustomerCardRes[] };
    metadata?: ICloverApiCustomerMetadataRes;
}
