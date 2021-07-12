export interface ICloverApiOrderTypeRes {
    id: string;
    label?: string;
    taxable: boolean;
    isDefault: boolean;
    filterCategories: boolean;
    isHidden: boolean;
    fee: number;
    minOrderAmount: number;
    maxOrderAmount: number;
    maxRadius: number;
    avgOrderTime: number;
    hoursAvailable: string;
    isDeleted: boolean;
}
