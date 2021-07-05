import type { ICloverApiEmployeeRes } from './ICloverApiEmployeeRes';
import type { ICloverApiOrderTypeRes } from './ICloverApiOrderTypeRes';
import type { ICloverApiLineItemElement } from './ICloverApiLineItemElement';
import type { ICloverApiDiscountElement } from './ICloverApiDiscountElement';

export interface ICloverApiAtomicOrderRes {
    href: string;
    id: string;
    currency: string;
    employee: ICloverApiEmployeeRes;
    total: number;
    orderType?: ICloverApiOrderTypeRes;
    taxRemoved: boolean;
    isVat: boolean;
    state: string;
    manualTransaction: boolean;
    groupLineItems: boolean;
    testMode: boolean;
    createdTime: number;
    clientCreatedTime: number;
    modifiedTime: number;
    lineItems: ICloverApiLineItemElement;
    discounts?: ICloverApiDiscountElement;
}
