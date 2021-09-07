import { plainToClass } from 'class-transformer';
import type { ICloverApiInventoryModifierGroup, ICloverApiInventoryListRes } from '../../../../../src';
import { CloverApiInventoryModifierGroupModel } from '../../../../../src';

export const cloverInventoryModifierGroup: ICloverApiInventoryModifierGroup = {
    id: '0AX419HAMGQ30',
    name: 'Ice cream flavors',
    minRequired: 1,
    maxAllowed: 1,
    showByDefault: true,
    modifierIds: 'PQ99X4C22RSK2,FKXRHG9WT980R,E72AT5D55XYHE',
};

export const cloverInventoryModifierGroup2: ICloverApiInventoryModifierGroup = {
    id: 'VHEVNEXSBXMTG',
    name: 'Ice cream toppings',
    maxAllowed: 1,
    showByDefault: true,
    modifierIds: 'PEVNXK1B67EBA,ZQAYBNSDFD89Y',
};

export const cloverInventoryModifierGroupsListRes: ICloverApiInventoryListRes<ICloverApiInventoryModifierGroup> = {
    elements: [cloverInventoryModifierGroup, cloverInventoryModifierGroup2],
};

export const cloverInventoryModifierGroupsListResWithOffset: ICloverApiInventoryListRes<ICloverApiInventoryModifierGroup> = {
    elements: [cloverInventoryModifierGroup2],
};

export const cloverInventoryModifierGroupsGetAllData: CloverApiInventoryModifierGroupModel[] = plainToClass(
    CloverApiInventoryModifierGroupModel,
    cloverInventoryModifierGroupsListRes.elements,
);

export const cloverInventoryModifierGroupsListData: CloverApiInventoryModifierGroupModel[] = plainToClass(
    CloverApiInventoryModifierGroupModel,
    cloverInventoryModifierGroupsListResWithOffset.elements,
);
