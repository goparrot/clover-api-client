import type { ICloverApiEmployee } from './ICloverApiEmployee';
import type { ICloverApiEmployeeOrderRes } from './ICloverApiEmployeeOrderRes';

export interface ICloverApiEmployeeRes extends ICloverApiEmployee {
    href: string;
    name: string;
    role: string;
    orders: ICloverApiEmployeeOrderRes;
}
