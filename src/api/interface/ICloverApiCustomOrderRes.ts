import type { ICloverApiEmployee } from './ICloverApiEmployee';

export interface ICloverApiCustomOrderRes {
    href: string;
    id: string;
    currency: string;
    employee: ICloverApiEmployee;
    taxRemoved: boolean;
    isVat: boolean;
    manualTransaction: boolean;
    groupLineItems: boolean;
    testMode: boolean;
    createdTime: number;
    clientCreatedTime: number;
    modifiedTime: number;
}
