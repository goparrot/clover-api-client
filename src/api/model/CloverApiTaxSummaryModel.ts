import type { ICloverApiTaxSummary } from '../interface';

export class CloverApiTaxSummaryModel implements ICloverApiTaxSummary {
    id: string;
    name: string;
    amount: number;
    rate: number;
}
