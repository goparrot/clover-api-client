import { Type } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryTaxRate } from '../interface';
import { CloverApiInventoryTaxRateModel } from './CloverApiInventoryTaxRateModel';

export class CloverApiInventoryTaxRateListResModel implements ICloverApiInventoryListRes<ICloverApiInventoryTaxRate> {
    @Type(() => CloverApiInventoryTaxRateModel)
    elements: CloverApiInventoryTaxRateModel[];
}
