import { Type } from 'class-transformer';
import type { ICloverApiMerchantOpenHour } from '../interface';
import { CloverApiHourModel } from './CloverApiHourModel';

export class CloverApiMerchantOpenHourModel implements ICloverApiMerchantOpenHour {
    @Type(() => CloverApiHourModel)
    elements?: CloverApiHourModel[];

    href: string;
}
