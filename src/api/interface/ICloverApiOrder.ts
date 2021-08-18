import type { ICloverApiEmployee } from './ICloverApiEmployee';
import type { ICloverApiOrderType } from './ICloverApiOrderType';

export interface ICloverApiOrder {
    href: string;
    id: string;
    currency: string;
    employee: ICloverApiEmployee;
    total: number;
    orderType: ICloverApiOrderType;
    taxRemoved: boolean;
    isVat: boolean;
    state: string;
    manualTransaction: boolean;
    groupLineItems: boolean;
    testMode: boolean;
    payType: string;
    createdTime: number;
    clientCreatedTime: number;
    modifiedTime: number;
}
