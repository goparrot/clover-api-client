import { Type } from 'class-transformer';
import type { ICloverApiBundleCountry } from '../interface';
import { CloverApiBundleElementCountryModel } from './CloverApiBundleElementCountryModel';

export class CloverApiBundleCountryModel implements ICloverApiBundleCountry {
    @Type(() => CloverApiBundleElementCountryModel)
    elements: CloverApiBundleElementCountryModel[];
}
