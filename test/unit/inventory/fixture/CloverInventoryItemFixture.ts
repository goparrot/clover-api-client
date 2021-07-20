import { plainToClass } from 'class-transformer';
import type { ICloverInventoryItem, ICloverInventoryListRes } from '../../../../src';
import { CloverInventoryItemModel, CloverInventoryItemPriceTypeEnum } from '../../../../src';
import { cloverInventoryCategory } from './CloverInventoryCategoryFixture';
import { cloverInventoryModifierGroup, cloverInventoryModifierGroup2 } from './CloverInventoryModifierGroupsFixture';

export const cloverInventoryItemId: string = 'KXW0EV58FA88A';

export const cloverInventoryItem: ICloverInventoryItem = {
    autoManage: false,
    available: true,
    id: cloverInventoryItemId,
    hidden: false,
    name: 'Apple',
    price: 99,
    priceType: CloverInventoryItemPriceTypeEnum.PER_UNIT,
    defaultTaxRates: false,
    unitName: 'OZ',
    cost: 0,
    isRevenue: true,
    stockCount: 0,
    modifiedTime: 1625568067000,
    categories: { elements: [cloverInventoryCategory] },
    modifierGroups: { elements: [cloverInventoryModifierGroup, cloverInventoryModifierGroup2] },
};

export const cloverInventoryItem2: ICloverInventoryItem = {
    autoManage: false,
    available: true,
    id: 'KXW0EV58FA88A',
    hidden: false,
    name: 'Peach',
    price: 110,
    priceType: CloverInventoryItemPriceTypeEnum.PER_UNIT,
    defaultTaxRates: false,
    unitName: 'g',
    cost: 0,
    isRevenue: true,
    stockCount: 0,
    modifiedTime: 1625568067000,
    categories: { elements: [cloverInventoryCategory] },
    modifierGroups: { elements: [cloverInventoryModifierGroup] },
};

export const cloverInventoryItemListRes: ICloverInventoryListRes<ICloverInventoryItem> = {
    elements: [cloverInventoryItem, cloverInventoryItem2],
};

export const cloverInventoryItemListResWithOffsetParam: ICloverInventoryListRes<ICloverInventoryItem> = {
    elements: [cloverInventoryItem2],
};

export const cloverInventoryItemsGetAllData: CloverInventoryItemModel[] = plainToClass(CloverInventoryItemModel, cloverInventoryItemListRes.elements);
export const cloverInventoryItemsListData: CloverInventoryItemModel[] = plainToClass(
    CloverInventoryItemModel,
    cloverInventoryItemListResWithOffsetParam.elements,
);

export const cloverInventoryItemGetOneRes: CloverInventoryItemModel = plainToClass(CloverInventoryItemModel, cloverInventoryItem);
