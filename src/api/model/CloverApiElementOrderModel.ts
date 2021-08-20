import { Type } from 'class-transformer';
import type { ICloverApiElementOrder } from '../interface';
import { CloverApiMerchantEmployeeModel } from './CloverApiMerchantEmployeeModel';

export class CloverApiElementOrderModel implements ICloverApiElementOrder {
    clientCreatedTime: number;
    createdTime: number;
    currency: string;

    @Type(() => CloverApiMerchantEmployeeModel)
    employee: CloverApiMerchantEmployeeModel;

    externalReferenceId: string;
    groupLineItems: boolean;
    href: string;
    id: string;
    isVat: boolean;
    manualTransaction: boolean;
    modifiedTime: number;
    payType: string;
    state: string;
    taxRemoved: boolean;
    testMode: boolean;
    total: number;
}
