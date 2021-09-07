import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiInventoryParam } from '../../../../src';
import { CloverInventoryTaxRate, CloverInventoryTaxRateModel } from '../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../common';
import {
    cloverInventoryTaxRateListRes,
    cloverInventoryTaxRateListResWithOffsetParam,
    cloverInventoryTaxRateGetAllData,
    cloverInventoryTaxRateListData,
} from '../fixture';

describe('CloverInventoryTaxRate (unit)', () => {
    let cloverInventoryTaxRate: CloverInventoryTaxRate;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryTaxRate = new CloverInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryTaxRate.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`, {}).reply(200, cloverInventoryTaxRateListRes);
            const data: CloverInventoryTaxRateModel[] = await cloverInventoryTaxRate.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryTaxRateModel);
            expect(data).toEqual(cloverInventoryTaxRateGetAllData);
        });
    });

    describe('#list', () => {
        it('should return plain data', async () => {
            const listParams: Partial<ICloverApiInventoryParam> = {
                offset: 1,
                limit: 1,
            };
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`, listParams).reply(200, cloverInventoryTaxRateListResWithOffsetParam);
            const data: CloverInventoryTaxRateModel[] = await cloverInventoryTaxRate.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverInventoryTaxRateModel);
            expect(data).toEqual(cloverInventoryTaxRateListData);
        });
    });
});
