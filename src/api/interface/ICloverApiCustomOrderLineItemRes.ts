import type { ICloverApiOrderRef } from './ICloverApiOrderRef';

export interface ICloverApiCustomOrderLineItemRes {
    id: string;
    orderRef: ICloverApiOrderRef;
    name: string;
    price: number;
    printed: boolean;
    createdTime: number;
    orderClientCreatedTime: number;
    exchanged: boolean;
    refunded: boolean;
    isRevenue: boolean;
}
