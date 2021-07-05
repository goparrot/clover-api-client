import { Type } from 'class-transformer';
import type { ICloverApiEmployeeRes } from '../interface/ICloverApiEmployeeRes';
import { CloverApiEmployeeOrderResModel } from './CloverApiEmployeeOrderResModel';

export class CloverApiEmployeeResModel implements ICloverApiEmployeeRes {
    href: string;
    id: string;
    name: string;
    @Type(() => CloverApiEmployeeOrderResModel)
    orders: CloverApiEmployeeOrderResModel;
    role: string;
}
