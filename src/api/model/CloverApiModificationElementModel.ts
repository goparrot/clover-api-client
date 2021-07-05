import { Type } from 'class-transformer';
import type { ICloverApiModificationElement } from '../interface';
import { CloverApiModificationModel } from './CloverApiModificationModel';

export class CloverApiModificationElementModel implements ICloverApiModificationElement {
    @Type(() => CloverApiModificationModel)
    elements: CloverApiModificationModel[];
}
