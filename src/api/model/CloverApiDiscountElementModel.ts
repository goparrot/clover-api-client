import { Type } from 'class-transformer';
import type { ICloverApiDiscountElement } from '../interface';
import { CloverApiDiscountModel } from './CloverApiDiscountModel';

export class CloverApiDiscountElementModel implements ICloverApiDiscountElement {
    @Type(() => CloverApiDiscountModel)
    elements: CloverApiDiscountModel[];
}
