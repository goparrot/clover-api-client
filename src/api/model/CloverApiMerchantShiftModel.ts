import { Type } from 'class-transformer';
import type { ICloverApiMerchantShift } from '../interface';
import { CloverApiElementShiftModel } from './CloverApiElementShiftModel';

export class CloverApiMerchantShiftModel implements ICloverApiMerchantShift {
    @Type(() => CloverApiElementShiftModel)
    elements?: CloverApiElementShiftModel[];

    href: string;
}
