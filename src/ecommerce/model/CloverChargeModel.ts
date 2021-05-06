import { Type } from 'class-transformer';
import type { ICloverCharge } from '../interface';
import { CloverOptionalChargeFieldModel } from './CloverOptionalChargeFieldModel';
import { CloverOutComeModel } from './CloverOutComeModel';
import { CloverSourceModel } from './CloverSourceModel';

export class CloverChargeModel extends CloverOptionalChargeFieldModel implements ICloverCharge {
    id: string;
    amount: number;
    currency: string;
    created: number;
    captured?: boolean;
    @Type(() => CloverOutComeModel)
    outcome: CloverOutComeModel;
    paid: boolean;
    status: string;
    @Type(() => CloverSourceModel)
    source: CloverSourceModel;
    order: string;
}
