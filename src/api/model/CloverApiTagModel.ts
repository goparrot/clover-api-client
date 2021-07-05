import { Type } from 'class-transformer';
import type { ICloverApiTag } from '../interface';
import { CloverApiLineItemModel } from './CloverApiLineItemModel';
import { CloverApiPrinterModel } from './CloverApiPrinterModel';
import type { CloverApiItemModel } from './CloverApiItemModel';

export class CloverApiTagModel implements ICloverApiTag {
    id?: string;
    name?: string;
    showInReporting?: boolean;

    @Type(() => CloverApiLineItemModel)
    items?: CloverApiItemModel[];

    @Type(() => CloverApiPrinterModel)
    printers?: CloverApiPrinterModel[];
}
