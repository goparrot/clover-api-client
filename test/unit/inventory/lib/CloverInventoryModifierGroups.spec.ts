import MockAdapter from 'axios-mock-adapter';
import { HttpStatus } from '@nestjs/common';
import type { ICloverApiInventoryParam } from '../../../../src';
import { CloverInventoryModifierGroups, CloverInventoryModifierGroupModel } from '../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../common';
import {
    cloverInventoryModifierGroupsGetAllData,
    cloverInventoryModifierGroupsListData,
    cloverInventoryModifierGroupsListRes,
    cloverInventoryModifierGroupsListResWithOffset,
} from '../fixture';

describe('CloverInventoryModifierGroups (unit)', () => {
    let cloverInventoryModifierGroups: CloverInventoryModifierGroups;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryModifierGroups = new CloverInventoryModifierGroups({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryModifierGroups.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`, {}).reply(HttpStatus.OK, cloverInventoryModifierGroupsListRes);
            const data: CloverInventoryModifierGroupModel[] = await cloverInventoryModifierGroups.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryModifierGroupModel);
            expect(data).toEqual(cloverInventoryModifierGroupsGetAllData);
        });
    });

    describe('#list', () => {
        it('should return plain data', async () => {
            const listParams: Partial<ICloverApiInventoryParam> = {
                offset: 1,
                limit: 1,
            };
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`, listParams).reply(HttpStatus.OK, cloverInventoryModifierGroupsListResWithOffset);
            const data: CloverInventoryModifierGroupModel[] = await cloverInventoryModifierGroups.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryModifierGroupModel);
            expect(data).toEqual(cloverInventoryModifierGroupsListData);
        });
    });
});
