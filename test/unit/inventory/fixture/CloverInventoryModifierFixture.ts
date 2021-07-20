import { plainToClass } from 'class-transformer';
import type { ICloverInventoryListRes, ICloverInventoryModifier } from '../../../../src';
import { CloverInventoryModifierModel } from '../../../../src';

export const cloverInventoryModifier: ICloverInventoryModifier = {
    id: 'ZQAYBNSDFD89Y',
    name: 'Chocolate chips',
    price: 100,
    available: true,
    modifierGroup: {
        id: 'VHEVNEXSBXMTG',
    },
};

export const cloverInventoryModifier2: ICloverInventoryModifier = {
    id: 'PEVNXK1B67EBA',
    name: 'Almond chips ',
    price: 100,
    available: true,
    modifierGroup: {
        id: 'VHEVNEXSBXMTG',
    },
};

export const cloverInventoryModifierListRes: ICloverInventoryListRes<ICloverInventoryModifier> = {
    elements: [cloverInventoryModifier, cloverInventoryModifier2],
};

export const cloverInventoryModifierListResWithOffset: ICloverInventoryListRes<ICloverInventoryModifier> = {
    elements: [cloverInventoryModifier2],
};

export const cloverInventoryModifierGetAllData: CloverInventoryModifierModel[] = plainToClass(
    CloverInventoryModifierModel,
    cloverInventoryModifierListRes.elements,
);

export const cloverInventoryModifierListData: CloverInventoryModifierModel[] = plainToClass(
    CloverInventoryModifierModel,
    cloverInventoryModifierListResWithOffset.elements,
);
