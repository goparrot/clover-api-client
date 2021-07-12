import { Type } from 'class-transformer';
import type { ICloverApiTaxRateRes } from '../interface';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';

export class CloverApiTaxRateResModel implements ICloverApiTaxRateRes {
    id: string;
    isDefault: boolean;

    @Type(() => CloverApiItemReferenceModel)
    lineItemRef?: CloverApiItemReferenceModel;

    name: string;
    rate: number;
}
