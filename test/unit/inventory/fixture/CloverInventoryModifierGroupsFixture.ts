import { plainToClass } from 'class-transformer';
import type { ICloverInventoryModifierGroup, ICloverInventoryListRes } from '../../../../src';
import { CloverInventoryModifierGroupModel } from '../../../../src';

export const cloverInventoryModifierGroup: ICloverInventoryModifierGroup = {
    id: '0AX419HAMGQ30',
    name: 'Ice cream flavors',
    minRequired: 1,
    maxAllowed: 1,
    showByDefault: true,
    modifierIds: 'PQ99X4C22RSK2,FKXRHG9WT980R,E72AT5D55XYHE',
};

export const cloverInventoryModifierGroup2: ICloverInventoryModifierGroup = {
    id: 'VHEVNEXSBXMTG',
    name: 'Ice cream toppings',
    maxAllowed: 1,
    showByDefault: true,
    modifierIds: 'PEVNXK1B67EBA,ZQAYBNSDFD89Y',
};

export const cloverInventoryModifierGroupsListRes: ICloverInventoryListRes<ICloverInventoryModifierGroup> = {
    elements: [cloverInventoryModifierGroup, cloverInventoryModifierGroup2],
};

export const cloverInventoryModifierGroupsListResWithOffset: ICloverInventoryListRes<ICloverInventoryModifierGroup> = {
    elements: [cloverInventoryModifierGroup2],
};

export const cloverInventoryModifierGroupsGetAllData: CloverInventoryModifierGroupModel[] = plainToClass(
    CloverInventoryModifierGroupModel,
    cloverInventoryModifierGroupsListRes.elements,
);

export const cloverInventoryModifierGroupsListData: CloverInventoryModifierGroupModel[] = plainToClass(
    CloverInventoryModifierGroupModel,
    cloverInventoryModifierGroupsListResWithOffset.elements,
);
