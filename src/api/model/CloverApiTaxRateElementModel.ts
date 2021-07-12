import { Type } from 'class-transformer';
import type { ICloverApiTaxRateElement } from '../interface';
import { CloverApiTaxRateResModel } from './CloverApiTaxRateResModel';

export class CloverApiTaxRateElementModel implements ICloverApiTaxRateElement {
    @Type(() => CloverApiTaxRateResModel)
    elements: CloverApiTaxRateResModel[];
}
