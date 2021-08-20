import type { ICloverApiEmployee } from './ICloverApiEmployee';
import type { ICloverApiBaseOrder } from './ICloverApiBaseOrder';

export interface ICloverApiElementEmployee extends ICloverApiEmployee {
    href: string;
    name: string;
    role: string;
    orders: ICloverApiBaseOrder;
}
