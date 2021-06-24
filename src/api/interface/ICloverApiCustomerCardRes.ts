import type { CloverCardBrandEnum } from '../../common';
import type { ICloverApiCustomer } from './ICloverApiCustomer';

export interface ICloverApiCustomerCardRes {
    id: string;
    first6: string;
    last4: string;
    expirationDate: string;
    additionalInfo: {
        isPurchaseCard: boolean;
        default: string;
    };
    cardType: CloverCardBrandEnum;
    token: string;
    tokenType: string;
    modifiedTime: number;
    /* Customer who this metadata belongs to. */
    customer: ICloverApiCustomer;
}
