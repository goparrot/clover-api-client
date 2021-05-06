import type { ICloverRefundRes } from '../interface';
import type { CloverRefundStatusEnum } from '../enum';

export class CloverRefundResModel implements ICloverRefundRes {
    charge: string;
    object: string;
    amount: number;
    created: number;
    currency?: string;
    description?: string;
    external_reference_id?: string;
    failure_reason?: string;
    id: string;
    metadata?: Record<string, any>;
    reason?: string;
    receipt_number?: string;
    status: CloverRefundStatusEnum;
}
