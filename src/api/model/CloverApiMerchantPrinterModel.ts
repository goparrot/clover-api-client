import { Type } from 'class-transformer';
import type { ICloverApiMerchantPrinter } from '../interface';
import { CloverApiElementPrinterModel } from './CloverApiElementPrinterModel';

export class CloverApiMerchantPrinterModel implements ICloverApiMerchantPrinter {
    @Type(() => CloverApiElementPrinterModel)
    elements?: CloverApiElementPrinterModel[];

    href: string;
}
