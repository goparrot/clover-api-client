import type { ICloverCustomerSource } from '../interface';

export class CloverCustomerSourceModel implements ICloverCustomerSource {
    object: string;
    data: string[];
    has_more?: boolean;
    url?: string;
}
