import { Type } from 'class-transformer';
import type { ICloverApiTaxSummaryElement } from '../interface';
import { CloverApiTaxSummaryModel } from './CloverApiTaxSummaryModel';

export class CloverApiTaxSummaryElementModel implements ICloverApiTaxSummaryElement {
    @Type(() => CloverApiTaxSummaryModel)
    elements: CloverApiTaxSummaryModel[];
}
