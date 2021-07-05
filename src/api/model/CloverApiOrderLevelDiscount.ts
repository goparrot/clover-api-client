import { Type } from 'class-transformer';
import type { ICloverApiOrderLevelDiscount } from '../interface';
import { CloverApiStandardDiscountModel } from './CloverApiStandardDiscountModel';
import { CloverApiApproverModel } from './CloverApiApproverModel';

export class CloverApiOrderLevelDiscount implements ICloverApiOrderLevelDiscount {
    id?: string;

    @Type(() => CloverApiStandardDiscountModel)
    discount?: CloverApiStandardDiscountModel;

    @Type(() => CloverApiApproverModel)
    approver?: CloverApiApproverModel;

    name?: string;
    amount?: number;
    percentage?: number;
}
