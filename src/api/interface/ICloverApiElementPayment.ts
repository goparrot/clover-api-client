import type { ICloverApiElementOrder } from './ICloverApiElementOrder';
import type { ICloverApiElementTender } from './ICloverApiElementTender';
import type { ICloverApiElementEmployee } from './ICloverApiElementEmployee';

export interface ICloverApiElementPayment {
    id: string;
    order: ICloverApiElementOrder;
    tender: ICloverApiElementTender;
    amount: number;
    taxAmount: number;
    cashbackAmount: number;
    employee: ICloverApiElementEmployee;
    createdTime: number;
    clientCreatedTime: number;
    modifiedTime: number;
    offline: boolean;
    result: string;
    externalReferenceId: string;
}
