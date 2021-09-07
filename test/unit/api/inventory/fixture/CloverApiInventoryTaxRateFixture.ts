import { plainToClass } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryTaxRate } from '../../../../../src';
import { CloverApiInventoryTaxRateModel } from '../../../../../src/api/inventory/model/CloverApiInventoryTaxRateModel';

export const cloverInventoryTaxRate: ICloverApiInventoryTaxRate = {
    id: 'ECE9WHT5TQFR6',
    name: 'Test',
    rate: 0,
    isDefault: false,
    taxAmount: 10,
};

export const cloverInventoryTaxRate2: ICloverApiInventoryTaxRate = {
    id: 'TCSJ2Q44ZMZ8P',
    name: 'Tax 3',
    rate: 200000,
    isDefault: false,
};

export const cloverInventoryTaxRateListRes: ICloverApiInventoryListRes<ICloverApiInventoryTaxRate> = {
    elements: [cloverInventoryTaxRate, cloverInventoryTaxRate2],
};

export const cloverInventoryTaxRateListResWithOffsetParam: ICloverApiInventoryListRes<ICloverApiInventoryTaxRate> = {
    elements: [cloverInventoryTaxRate, cloverInventoryTaxRate2],
};

export const cloverInventoryTaxRateGetAllData: CloverApiInventoryTaxRateModel[] = plainToClass(
    CloverApiInventoryTaxRateModel,
    cloverInventoryTaxRateListRes.elements,
);
export const cloverInventoryTaxRateListData: CloverApiInventoryTaxRateModel[] = plainToClass(
    CloverApiInventoryTaxRateModel,
    cloverInventoryTaxRateListResWithOffsetParam.elements,
);
