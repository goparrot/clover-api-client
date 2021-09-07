import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiInventoryParam } from '../../../../../src';
import { CloverApiInventoryItem, CloverApiInventoryItemModel } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';
import {
    cloverInventoryItemGetOneRes,
    cloverInventoryItemId,
    cloverInventoryItemListRes,
    cloverInventoryItemListResWithOffsetParam,
    cloverInventoryItemsGetAllData,
    cloverInventoryItemsListData,
} from '../fixture';

describe('CloverApiInventoryItem (unit)', () => {
    let cloverInventoryItem: CloverApiInventoryItem;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryItem = new CloverApiInventoryItem({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryItem.client);
    });

    describe('#getAll', () => {
        it('should return all clover inventory items', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`, {}).reply(200, cloverInventoryItemListRes);
            const data: CloverApiInventoryItemModel[] = await cloverInventoryItem.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryItemModel);
            expect(data).toEqual(cloverInventoryItemsGetAllData);
        });

        it('should return 1 inventory item starting from second', async () => {
            const listParams: Partial<ICloverApiInventoryParam> = {
                offset: 1,
                limit: 1,
            };
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`, listParams).reply(200, cloverInventoryItemListResWithOffsetParam);
            const data: CloverApiInventoryItemModel[] = await cloverInventoryItem.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryItemModel);
            expect(data).toEqual(cloverInventoryItemsListData);
        });
    });

    describe('getOne', () => {
        it('should return corresponding inventory item', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items/${cloverInventoryItemId}`, {}).reply(200, cloverInventoryItemGetOneRes);
            const data: CloverApiInventoryItemModel = await cloverInventoryItem.getOne(fakeMerchantId, cloverInventoryItemId);

            expect(data).toBeInstanceOf(CloverApiInventoryItemModel);
            expect(data).toEqual(cloverInventoryItemGetOneRes);
        });
    });
});
