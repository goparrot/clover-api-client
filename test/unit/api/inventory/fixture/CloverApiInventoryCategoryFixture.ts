import { plainToClass } from 'class-transformer';
import type { ICloverApiInventoryCategory, ICloverApiInventoryListRes } from '../../../../../src';
import { CloverApiInventoryCategoryModel } from '../../../../../src';

export const cloverInventoryCategory: ICloverApiInventoryCategory = {
    id: 'TBNB6SKJHK7MT',
    name: 'Fruits',
    sortOrder: 1,
    modifiedTime: 1625484606000,
};

export const cloverInventoryCategory2: ICloverApiInventoryCategory = {
    id: 'Z9QDJW9P7QMYM',
    name: 'Dessert',
    sortOrder: 0,
    modifiedTime: 1625484606000,
};

export const cloverInventoryCategoryListRes: ICloverApiInventoryListRes<ICloverApiInventoryCategory> = {
    elements: [cloverInventoryCategory, cloverInventoryCategory2],
};

export const cloverInventoryCategoryListResWithOffset: ICloverApiInventoryListRes<ICloverApiInventoryCategory> = {
    elements: [cloverInventoryCategory2],
};

export const cloverInventoryCategoryGetAllData: CloverApiInventoryCategoryModel[] = plainToClass(
    CloverApiInventoryCategoryModel,
    cloverInventoryCategoryListRes.elements,
);
export const cloverInventoryCategoryListData: CloverApiInventoryCategoryModel[] = plainToClass(
    CloverApiInventoryCategoryModel,
    cloverInventoryCategoryListResWithOffset.elements,
);
