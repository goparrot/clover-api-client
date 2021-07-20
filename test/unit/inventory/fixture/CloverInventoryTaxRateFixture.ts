import { plainToClass } from 'class-transformer';
import type { ICloverInventoryListRes, ICloverInventoryTaxRate } from '../../../../src';
import { CloverInventoryTaxRateModel } from '../../../../src/inventory/model/CloverInventoryTaxRateModel';

export const cloverInventoryTaxRate: ICloverInventoryTaxRate = {
    id: 'ECE9WHT5TQFR6',
    name: 'Test',
    rate: 0,
    isDefault: false,
    taxAmount: 10,
};

export const cloverInventoryTaxRate2: ICloverInventoryTaxRate = {
    id: 'TCSJ2Q44ZMZ8P',
    name: 'Tax 3',
    rate: 200000,
    isDefault: false,
};

export const cloverInventoryTaxRateListRes: ICloverInventoryListRes<ICloverInventoryTaxRate> = {
    elements: [cloverInventoryTaxRate, cloverInventoryTaxRate2],
};

export const cloverInventoryTaxRateListResWithOffsetParam: ICloverInventoryListRes<ICloverInventoryTaxRate> = {
    elements: [cloverInventoryTaxRate, cloverInventoryTaxRate2],
};

export const cloverInventoryTaxRateGetAllData: CloverInventoryTaxRateModel[] = plainToClass(
    CloverInventoryTaxRateModel,
    cloverInventoryTaxRateListRes.elements,
);
export const cloverInventoryTaxRateListData: CloverInventoryTaxRateModel[] = plainToClass(
    CloverInventoryTaxRateModel,
    cloverInventoryTaxRateListResWithOffsetParam.elements,
);
