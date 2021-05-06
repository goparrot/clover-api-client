import type { ICloverRefundData } from '../interface';

export class CloverRefundDataModel implements ICloverRefundData {
    has_more: boolean;
    object: string;
    url: string;
}
