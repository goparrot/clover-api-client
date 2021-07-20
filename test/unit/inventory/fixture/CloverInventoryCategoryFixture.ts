import { plainToClass } from 'class-transformer';
import type { ICloverInventoryCategory, ICloverInventoryListRes } from '../../../../src';
import { CloverInventoryCategoryModel } from '../../../../src';

export const cloverInventoryCategory: ICloverInventoryCategory = {
    id: 'TBNB6SKJHK7MT',
    name: 'Fruits',
    sortOrder: 1,
    modifiedTime: 1625484606000,
};

export const cloverInventoryCategory2: ICloverInventoryCategory = {
    id: 'Z9QDJW9P7QMYM',
    name: 'Dessert',
    sortOrder: 0,
    modifiedTime: 1625484606000,
};

export const cloverInventoryCategoryListRes: ICloverInventoryListRes<ICloverInventoryCategory> = {
    elements: [cloverInventoryCategory, cloverInventoryCategory2],
};

export const cloverInventoryCategoryListResWithOffset: ICloverInventoryListRes<ICloverInventoryCategory> = {
    elements: [cloverInventoryCategory2],
};

export const cloverInventoryCategoryGetAllData: CloverInventoryCategoryModel[] = plainToClass(
    CloverInventoryCategoryModel,
    cloverInventoryCategoryListRes.elements,
);
export const cloverInventoryCategoryListData: CloverInventoryCategoryModel[] = plainToClass(
    CloverInventoryCategoryModel,
    cloverInventoryCategoryListResWithOffset.elements,
);
