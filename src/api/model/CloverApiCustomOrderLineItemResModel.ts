import { Type } from 'class-transformer';
import type { ICloverApiCustomOrderLineItemRes } from '../interface';
import { CloverApiOrderRefModel } from './CloverApiOrderRefModel';

export class CloverApiCustomOrderLineItemResModel implements ICloverApiCustomOrderLineItemRes {
    createdTime: number;
    exchanged: boolean;
    id: string;
    isRevenue: boolean;
    name: string;
    orderClientCreatedTime: number;

    @Type(() => CloverApiOrderRefModel)
    orderRef: CloverApiOrderRefModel;

    price: number;
    printed: boolean;
    refunded: boolean;
}
