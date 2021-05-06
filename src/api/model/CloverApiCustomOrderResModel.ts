import { Type } from 'class-transformer';
import type { ICloverApiCustomOrderRes } from '../interface';
import { CloverApiEmployeeModel } from './CloverApiEmployeeModel';

export class CloverApiCustomOrderResModel implements ICloverApiCustomOrderRes {
    clientCreatedTime: number;
    createdTime: number;
    currency: string;
    @Type(() => CloverApiEmployeeModel)
    employee: CloverApiEmployeeModel;
    groupLineItems: boolean;
    href: string;
    id: string;
    isVat: boolean;
    manualTransaction: boolean;
    modifiedTime: number;
    taxRemoved: boolean;
    testMode: boolean;
}
