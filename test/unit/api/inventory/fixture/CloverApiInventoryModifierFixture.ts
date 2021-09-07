import { plainToClass } from 'class-transformer';
import type { ICloverApiInventoryListRes, ICloverApiInventoryModifier } from '../../../../../src';
import { CloverApiInventoryModifierModel } from '../../../../../src';

export const cloverInventoryModifier: ICloverApiInventoryModifier = {
    id: 'ZQAYBNSDFD89Y',
    name: 'Chocolate chips',
    price: 100,
    available: true,
    modifierGroup: {
        id: 'VHEVNEXSBXMTG',
    },
};

export const cloverInventoryModifier2: ICloverApiInventoryModifier = {
    id: 'PEVNXK1B67EBA',
    name: 'Almond chips ',
    price: 100,
    available: true,
    modifierGroup: {
        id: 'VHEVNEXSBXMTG',
    },
};

export const cloverInventoryModifierListRes: ICloverApiInventoryListRes<ICloverApiInventoryModifier> = {
    elements: [cloverInventoryModifier, cloverInventoryModifier2],
};

export const cloverInventoryModifierListResWithOffset: ICloverApiInventoryListRes<ICloverApiInventoryModifier> = {
    elements: [cloverInventoryModifier2],
};

export const cloverInventoryModifierGetAllData: CloverApiInventoryModifierModel[] = plainToClass(
    CloverApiInventoryModifierModel,
    cloverInventoryModifierListRes.elements,
);

export const cloverInventoryModifierListData: CloverApiInventoryModifierModel[] = plainToClass(
    CloverApiInventoryModifierModel,
    cloverInventoryModifierListResWithOffset.elements,
);
