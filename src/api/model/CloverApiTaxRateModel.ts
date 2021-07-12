import { Type } from 'class-transformer';
import type { ICloverApiTaxRate } from '../interface';
import type { CloverTaxTypeEnum } from '../enum';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';

export class CloverApiTaxRateModel implements ICloverApiTaxRate {
    rate?: number;
    id?: string;
    name: string;
    taxType?: CloverTaxTypeEnum;
    isDefault?: boolean;

    @Type(() => CloverApiItemReferenceModel)
    items?: CloverApiItemReferenceModel[];

    taxAmount?: number;
    deletedTime?: number;
    modifiedTime?: number;
}
