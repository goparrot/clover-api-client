import { Type } from 'class-transformer';
import type { ICloverApiIncludedApp } from '../interface';
import { CloverApiIncludedElementAppModel } from './CloverApiIncludedElementAppModel';

export class CloverApiIncludedAppModel implements ICloverApiIncludedApp {
    @Type(() => CloverApiIncludedElementAppModel)
    elements: CloverApiIncludedElementAppModel[];
}
