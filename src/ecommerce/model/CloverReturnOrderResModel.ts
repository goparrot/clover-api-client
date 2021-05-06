import { Type } from 'class-transformer';
import type { ICloverReturnOrderRes } from '../interface';
import { CloverReturnOrderItemModel } from './CloverReturnOrderItemModel';

export class CloverReturnOrderResModel implements ICloverReturnOrderRes {
    id: string;
    amount: number;
    amount_returned: number;
    created?: number;
    currency: string;
    @Type(() => CloverReturnOrderItemModel)
    items?: CloverReturnOrderItemModel[];
    livemode?: boolean;
    object?: string;
    status: string;
    status_transitions: Record<string, string | number | boolean>;
}
