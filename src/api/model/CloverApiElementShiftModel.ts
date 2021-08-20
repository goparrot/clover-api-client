import { Type } from 'class-transformer';
import type { ICloverApiElementShift } from '../interface';
import { CloverApiOverrideEmployeeModel } from './CloverApiOverrideEmployeeModel';

export class CloverApiElementShiftModel implements ICloverApiElementShift {
    cashTipsCollected: number;
    id: string;
    inTime: number;

    @Type(() => CloverApiOverrideEmployeeModel)
    overrideInEmployee: CloverApiOverrideEmployeeModel;

    overrideInTime: number;
    @Type(() => CloverApiOverrideEmployeeModel)
    overrideOutEmployee: CloverApiOverrideEmployeeModel;

    serverBanking: boolean;
}
