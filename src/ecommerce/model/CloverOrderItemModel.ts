import { Type } from 'class-transformer';
import type { ICloverOrderItem } from '../interface';
import type { CloverOrderItemTypeEnum } from '../enum';
import { CloverOrderTaxRateModel } from './CloverOrderTaxRateModel';

export class CloverOrderItemModel implements ICloverOrderItem {
    amount: number;
    currency?: string;
    description?: string;
    parent: string;
    quantity?: number;
    @Type(() => CloverOrderTaxRateModel)
    tax_rates?: CloverOrderTaxRateModel[];
    type?: CloverOrderItemTypeEnum;
    amount_refunded?: number;
}
