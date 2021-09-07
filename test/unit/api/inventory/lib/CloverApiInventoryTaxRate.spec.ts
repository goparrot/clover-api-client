import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiInventoryParam } from '../../../../../src';
import { CloverApiInventoryTaxRate, CloverApiInventoryTaxRateModel } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';
import {
    cloverInventoryTaxRateListRes,
    cloverInventoryTaxRateListResWithOffsetParam,
    cloverInventoryTaxRateGetAllData,
    cloverInventoryTaxRateListData,
} from '../fixture';

describe('CloverApiInventoryTaxRate (unit)', () => {
    let cloverInventoryTaxRate: CloverApiInventoryTaxRate;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryTaxRate = new CloverApiInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryTaxRate.client);
    });

    describe('#getAll', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`, {}).reply(200, cloverInventoryTaxRateListRes);
            const data: CloverApiInventoryTaxRateModel[] = await cloverInventoryTaxRate.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryTaxRateModel);
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
            const data: CloverApiInventoryTaxRateModel[] = await cloverInventoryTaxRate.getAll(fakeMerchantId);

            expect(data[0]).toBeInstanceOf(CloverApiInventoryTaxRateModel);
            expect(data).toEqual(cloverInventoryTaxRateListData);
        });
    });
});
