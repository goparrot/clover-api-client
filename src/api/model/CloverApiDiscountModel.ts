import { Type } from 'class-transformer';
import type { ICloverApiDiscount } from '../interface';
import { CloverApiApproverModel } from './CloverApiApproverModel';
import { CloverApiStandardDiscountModel } from './CloverApiStandardDiscountModel';

export class CloverApiDiscountModel implements ICloverApiDiscount {
    amount?: number;
    @Type(() => CloverApiApproverModel)
    approver?: CloverApiApproverModel;

    @Type(() => CloverApiStandardDiscountModel)
    discount?: CloverApiStandardDiscountModel;

    id?: string;
    name: string;
    percentage?: number;
}
