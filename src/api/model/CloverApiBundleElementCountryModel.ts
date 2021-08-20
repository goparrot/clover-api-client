import type { ICloverApiBundleElementCountry } from '../interface';

export class CloverApiBundleElementCountryModel implements ICloverApiBundleElementCountry {
    country: string;
    id: string;
    price: number;
    pricePerDevice: number;
}
