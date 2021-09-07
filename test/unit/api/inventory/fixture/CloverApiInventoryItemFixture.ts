import { plainToClass } from 'class-transformer';
import type { ICloverApiInventoryItem, ICloverApiInventoryListRes } from '../../../../../src';
import { CloverApiInventoryItemModel, CloverApiInventoryItemPriceTypeEnum } from '../../../../../src';
import { cloverInventoryCategory } from './CloverApiInventoryCategoryFixture';
import { cloverInventoryModifierGroup, cloverInventoryModifierGroup2 } from './CloverApiInventoryModifierGroupsFixture';

export const cloverInventoryItemId: string = 'KXW0EV58FA88A';

export const cloverInventoryItem: ICloverApiInventoryItem = {
    autoManage: false,
    available: true,
    id: cloverInventoryItemId,
    hidden: false,
    name: 'Apple',
    price: 99,
    priceType: CloverApiInventoryItemPriceTypeEnum.PER_UNIT,
    defaultTaxRates: false,
    unitName: 'OZ',
    cost: 0,
    isRevenue: true,
    stockCount: 0,
    modifiedTime: 1625568067000,
    categories: { elements: [cloverInventoryCategory] },
    modifierGroups: { elements: [cloverInventoryModifierGroup, cloverInventoryModifierGroup2] },
};

export const cloverInventoryItem2: ICloverApiInventoryItem = {
    autoManage: false,
    available: true,
    id: 'KXW0EV58FA88A',
    hidden: false,
    name: 'Peach',
    price: 110,
    priceType: CloverApiInventoryItemPriceTypeEnum.PER_UNIT,
    defaultTaxRates: false,
    unitName: 'g',
    cost: 0,
    isRevenue: true,
    stockCount: 0,
    modifiedTime: 1625568067000,
    categories: { elements: [cloverInventoryCategory] },
    modifierGroups: { elements: [cloverInventoryModifierGroup] },
};

export const cloverInventoryItemListRes: ICloverApiInventoryListRes<ICloverApiInventoryItem> = {
    elements: [cloverInventoryItem, cloverInventoryItem2],
};

export const cloverInventoryItemListResWithOffsetParam: ICloverApiInventoryListRes<ICloverApiInventoryItem> = {
    elements: [cloverInventoryItem2],
};

export const cloverInventoryItemsGetAllData: CloverApiInventoryItemModel[] = plainToClass(CloverApiInventoryItemModel, cloverInventoryItemListRes.elements);
export const cloverInventoryItemsListData: CloverApiInventoryItemModel[] = plainToClass(
    CloverApiInventoryItemModel,
    cloverInventoryItemListResWithOffsetParam.elements,
);

export const cloverInventoryItemGetOneRes: CloverApiInventoryItemModel = plainToClass(CloverApiInventoryItemModel, cloverInventoryItem);
