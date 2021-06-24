import type { ICloverRefundRes } from './ICloverRefundRes';

export interface ICloverRefundListRes extends Partial<ICloverRefundRes> {
    inReportingPeriod: boolean;
    amount: number;
    id: string;
    voided: boolean;
}
