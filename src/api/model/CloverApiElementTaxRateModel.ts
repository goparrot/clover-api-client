import type { ICloverApiElementTaxRate } from '../interface';

export class CloverApiElementTaxRateModel implements ICloverApiElementTaxRate {
    id: string;
    isDefault: boolean;
    name: string;
    rate: number;
    taxAmount: number;
}
