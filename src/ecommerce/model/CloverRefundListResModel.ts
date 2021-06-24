import type { ICloverRefundListRes } from '../interface';
import type { CloverRefundStatusEnum } from '../enum';

export class CloverRefundListResModel implements ICloverRefundListRes {
    inReportingPeriod: boolean;
    amount: number;
    id: string;
    voided: boolean;
    charge?: string;
    created?: number;
    currency?: string;
    description?: string;
    external_reference_id?: string;
    failure_reason?: string;
    metadata?: Record<string, any>;
    object?: string;
    reason?: string;
    receipt_number?: string;
    status?: CloverRefundStatusEnum;
}
