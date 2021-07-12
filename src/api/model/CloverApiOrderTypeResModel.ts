import type { ICloverApiOrderTypeRes } from '../interface';

export class CloverApiOrderTypeResModel implements ICloverApiOrderTypeRes {
    avgOrderTime: number;
    fee: number;
    filterCategories: boolean;
    hoursAvailable: string;
    id: string;
    isDefault: boolean;
    isDeleted: boolean;
    isHidden: boolean;
    label?: string;
    maxOrderAmount: number;
    maxRadius: number;
    minOrderAmount: number;
    taxable: boolean;
}
