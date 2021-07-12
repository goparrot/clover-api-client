import type { ICloverApiItemReference } from './ICloverApiItemReference';

export interface ICloverApiTaxRateRes {
    id: string;
    lineItemRef?: ICloverApiItemReference;
    name: string;
    rate: number;
    isDefault: boolean;
}
