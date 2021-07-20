import MockAdapter from 'axios-mock-adapter';
import { HttpStatus } from '@nestjs/common';
import type { ICloverApiInventoryParam } from '../../../../src';
import { CloverInventoryModifier, CloverInventoryModifierModel } from '../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../common';
import {
    cloverInventoryModifierGetAllData,
    cloverInventoryModifierListData,
    cloverInventoryModifierListRes,
    cloverInventoryModifierListResWithOffset,
} from '../fixture';

describe('CloverInventoryModifier (unit)', () => {
    let cloverInventoryModifier: CloverInventoryModifier;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryModifier = new CloverInventoryModifier({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryModifier.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`, {}).reply(HttpStatus.OK, cloverInventoryModifierListRes);
            const data: CloverInventoryModifierModel[] = await cloverInventoryModifier.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryModifierModel);
            expect(data).toEqual(cloverInventoryModifierGetAllData);
        });
    });

    describe('#list', () => {
        it('should return plain data', async () => {
            const listParams: Partial<ICloverApiInventoryParam> = {
                offset: 1,
                limit: 1,
            };
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`, listParams).reply(HttpStatus.OK, cloverInventoryModifierListResWithOffset);
            const data: CloverInventoryModifierModel[] = await cloverInventoryModifier.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryModifierModel);
            expect(data).toEqual(cloverInventoryModifierListData);
        });
    });
});
