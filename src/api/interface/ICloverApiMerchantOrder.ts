import type { ICloverApiElementOrder } from './ICloverApiElementOrder';

export interface ICloverApiMerchantOrder {
    elements?: ICloverApiElementOrder[];
    href: string;
}
