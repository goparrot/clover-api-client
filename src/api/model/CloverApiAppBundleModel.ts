import { Type } from 'class-transformer';
import type { ICloverApiAppBundle } from '../interface';
import { CloverApiBundleCountryModel } from './CloverApiBundleCountryModel';
import { CloverApiIncludedAppModel } from './CloverApiIncludedAppModel';

export class CloverApiAppBundleModel implements ICloverApiAppBundle {
    @Type(() => CloverApiBundleCountryModel)
    bundleCountries: CloverApiBundleCountryModel;

    id: string;

    @Type(() => CloverApiIncludedAppModel)
    includedApps: CloverApiIncludedAppModel;

    name: string;
    price: number;
    pricePerDevice: number;
}
