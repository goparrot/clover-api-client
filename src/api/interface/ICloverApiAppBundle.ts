import type { ICloverApiBundleCountry } from './ICloverApiBundleCountry';
import type { ICloverApiIncludedApp } from './ICloverApiIncludedApp';

export interface ICloverApiAppBundle {
    id: string;
    name: string;
    price: number;
    pricePerDevice: number;
    includedApps: ICloverApiIncludedApp;
    bundleCountries: ICloverApiBundleCountry;
}
