import { Type } from 'class-transformer';
import type { ICloverApiOwnerOrder } from '../interface';
import { CloverApiElementOrderModel } from './CloverApiElementOrderModel';

export class CloverApiOwnerOrderModel implements ICloverApiOwnerOrder {
    @Type(() => CloverApiElementOrderModel)
    elements?: CloverApiElementOrderModel;

    href: string;
}
