import { Type } from 'class-transformer';
import type { ICloverApiMerchantTaxRate } from '../interface';
import { CloverApiElementTaxRateModel } from './CloverApiElementTaxRateModel';

export class CloverApiMerchantTaxRateModel implements ICloverApiMerchantTaxRate {
    @Type(() => CloverApiElementTaxRateModel)
    elements?: CloverApiElementTaxRateModel[];

    href: string;
}
