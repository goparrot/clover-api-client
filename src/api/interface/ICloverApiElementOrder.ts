import type { ICloverApiEmployee } from './ICloverApiEmployee';
import type { ICloverApiBaseOrder } from './ICloverApiBaseOrder';

export interface ICloverApiElementOrder extends ICloverApiBaseOrder {
    id: string;
    currency: string;
    employee: ICloverApiEmployee;
    total: number;
    externalReferenceId: string;
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
