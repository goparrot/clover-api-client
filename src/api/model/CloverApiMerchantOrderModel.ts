import { Type } from 'class-transformer';
import type { ICloverApiMerchantOrder } from '../interface';
import { CloverApiElementOrderModel } from './CloverApiElementOrderModel';

export class CloverApiMerchantOrderModel implements ICloverApiMerchantOrder {
    @Type(() => CloverApiElementOrderModel)
    elements?: CloverApiElementOrderModel[];

    href: string;
}
