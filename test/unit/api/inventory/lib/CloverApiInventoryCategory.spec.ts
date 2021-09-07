import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiInventoryParam } from '../../../../../src';
import { CloverApiInventoryCategory, CloverApiInventoryCategoryModel } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';
import {
    cloverInventoryCategoryGetAllData,
    cloverInventoryCategoryListData,
    cloverInventoryCategoryListRes,
    cloverInventoryCategoryListResWithOffset,
} from '../fixture';

describe('CloverApiInventoryCategory (unit)', () => {
    let cloverInventoryCategory: CloverApiInventoryCategory;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryCategory = new CloverApiInventoryCategory({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryCategory.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/categories`, {}).reply(200, cloverInventoryCategoryListRes);
            const data: CloverApiInventoryCategoryModel[] = await cloverInventoryCategory.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryCategoryModel);
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
            const data: CloverApiInventoryCategoryModel[] = await cloverInventoryCategory.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryCategoryModel);
            expect(data).toEqual(cloverInventoryCategoryListData);
        });
    });
});
