import { Type } from 'class-transformer';
import type { ICloverApiLineItemElement } from '../interface';
import { CloverApiLineItemResModel } from './CloverApiLineItemResModel';

export class CloverApiLineItemElementModel implements ICloverApiLineItemElement {
    @Type(() => CloverApiLineItemResModel)
    elements: CloverApiLineItemResModel[];
}
