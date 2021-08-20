import { Type } from 'class-transformer';
import type { ICloverApiMerchantTender } from '../interface';
import { CloverApiElementTenderModel } from './CloverApiElementTenderModel';

export class CloverApiMerchantTenderModel implements ICloverApiMerchantTender {
    @Type(() => CloverApiElementTenderModel)
    elements?: CloverApiElementTenderModel[];
    href: string;
}
