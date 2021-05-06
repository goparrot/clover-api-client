import { Type } from 'class-transformer';
import type { ICloverRefund } from '../interface';
import { CloverRefundDataModel } from './CloverRefundDataModel';

export class CloverRefundModel implements ICloverRefund {
    @Type(() => CloverRefundDataModel)
    data: CloverRefundDataModel[];
}
