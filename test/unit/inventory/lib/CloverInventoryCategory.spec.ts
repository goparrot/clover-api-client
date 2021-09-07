import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiInventoryParam } from '../../../../src';
import { CloverInventoryCategory, CloverInventoryCategoryModel } from '../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../common';
import {
    cloverInventoryCategoryGetAllData,
    cloverInventoryCategoryListData,
    cloverInventoryCategoryListRes,
    cloverInventoryCategoryListResWithOffset,
} from '../fixture';

describe('CloverInventoryCategory (unit)', () => {
    let cloverInventoryCategory: CloverInventoryCategory;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryCategory = new CloverInventoryCategory({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryCategory.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/categories`, {}).reply(200, cloverInventoryCategoryListRes);
            const data: CloverInventoryCategoryModel[] = await cloverInventoryCategory.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryCategoryModel);
            expect(data).toEqual(cloverInventoryCategoryGetAllData);
        });
    });

    describe('#list', () => {
        it('should return plain data', async () => {
            const listParams: Partial<ICloverApiInventoryParam> = {
                offset: 1,
                limit: 1,
            };
            mock.onGet(`/v3/merchants/${fakeMerchantId}/categories`, listParams).reply(200, cloverInventoryCategoryListResWithOffset);
            const data: CloverInventoryCategoryModel[] = await cloverInventoryCategory.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryCategoryModel);
            expect(data).toEqual(cloverInventoryCategoryListData);
        });
    });
});
