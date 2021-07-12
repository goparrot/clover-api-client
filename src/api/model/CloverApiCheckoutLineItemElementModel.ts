import { Type } from 'class-transformer';
import type { ICloverApiCheckoutLineItemElement } from '../interface';
import { CloverApiCheckoutLineItemResModel } from './CloverApiCheckoutLineItemResModel';

export class CloverApiCheckoutLineItemElementModel implements ICloverApiCheckoutLineItemElement {
    @Type(() => CloverApiCheckoutLineItemResModel)
    elements: CloverApiCheckoutLineItemResModel[];
}
