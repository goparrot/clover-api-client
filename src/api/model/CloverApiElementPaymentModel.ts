import { Type } from 'class-transformer';
import type { ICloverApiElementPayment } from '../interface';
import { CloverApiElementEmployeeModel } from './CloverApiElementEmployeeModel';
import { CloverApiElementOrderModel } from './CloverApiElementOrderModel';
import { CloverApiElementTenderModel } from './CloverApiElementTenderModel';

export class CloverApiElementPaymentModel implements ICloverApiElementPayment {
    amount: number;
    cashbackAmount: number;
    clientCreatedTime: number;
    createdTime: number;

    @Type(() => CloverApiElementEmployeeModel)
    employee: CloverApiElementEmployeeModel;

    externalReferenceId: string;
    id: string;
    modifiedTime: number;
    offline: boolean;

    @Type(() => CloverApiElementOrderModel)
    order: CloverApiElementOrderModel;

    result: string;
    taxAmount: number;

    @Type(() => CloverApiElementTenderModel)
    tender: CloverApiElementTenderModel;
}
