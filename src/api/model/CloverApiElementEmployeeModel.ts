import { Type } from 'class-transformer';
import type { ICloverApiElementEmployee } from '../interface';
import { CloverApiBaseOrderModel } from './CloverApiBaseOrderModel';

export class CloverApiElementEmployeeModel implements ICloverApiElementEmployee {
    href: string;
    id: string;
    name: string;

    @Type(() => CloverApiBaseOrderModel)
    orders: CloverApiBaseOrderModel;

    role: string;
}
