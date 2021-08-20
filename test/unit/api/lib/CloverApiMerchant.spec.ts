import MockAdapter from 'axios-mock-adapter';
import { CloverApiMerchant, CloverApiOrderTypeElementResModel, CloverApiDefaultServiceChargeModel, CloverApiMerchantResModel } from '../../../../src/api';
import type { ICloverApiOrderTypeElementRes } from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/';

describe('CloverApiMerchant (unit)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';
    let cloverApiMerchant: CloverApiMerchant;
    let mock: MockAdapter;

    const cloverApiOrderTypeElementRes: ICloverApiOrderTypeElementRes = {
        elements: [
            {
                id: 'A0RZYHZDDEYHA',
                label: 'Pickup1',
                taxable: false,
                isDefault: false,
                filterCategories: false,
                isHidden: false,
                fee: 0,
                minOrderAmount: 0,
                maxOrderAmount: 0,
                maxRadius: 0,
                avgOrderTime: 0,
                hoursAvailable: 'BUSINESS',
                isDeleted: false,
            },
            {
                id: 'PWMZAHQHC32MR',
                taxable: false,
                isDefault: true,
                filterCategories: false,
                isHidden: false,
                fee: 0,
                minOrderAmount: 0,
                maxOrderAmount: 0,
                maxRadius: 0,
                avgOrderTime: 0,
                hoursAvailable: 'BUSINESS',
                isDeleted: false,
            },
        ],
        href: `http://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/order_types?limit=100`,
    };

    const cloverApiDefaultServiceChargeModel: CloverApiDefaultServiceChargeModel = {
        id: 'D9MFF419P7V7M',
        name: 'Service Charge',
        enabled: true,
        percentage: 1,
        percentageDecimal: 110000,
    };

    const cloverApiMerchantResModel: CloverApiMerchantResModel = {
        href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}`,
        id: fakeMerchantId,
        name: 'GoParrot',
        owner: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/employees/MEBZE2SG4VZEJ`,
            id: 'MEBZE2SG4VZEJ',
            orders: {
                href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/employees/MEBZE2SG4VZEJ/orders`,
            },
        },
        address: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/address`,
        },
        merchantPlan: {
            id: 'FKNKX0SAATWAG',
        },
        createdTime: 1604482652000,
        gateway: {},
        tenders: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/tenders`,
        },
        shifts: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/shifts`,
        },
        orders: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/orders`,
        },
        payments: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/payments`,
        },
        taxRates: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/tax_rates`,
        },
        printers: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/printers`,
        },
        modifierGroups: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/modifier_groups`,
        },
        orderTypes: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/order_types`,
        },
        reseller: {
            id: '55ZBBW12EAF2W',
        },
        opening_hours: {
            href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/opening_hours`,
        },
    };

    beforeEach(() => {
        cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiMerchant.client);
    });

    describe('#listOrderType', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(200, cloverApiOrderTypeElementRes);
            const res: CloverApiOrderTypeElementResModel = await cloverApiMerchant.listOrderType(fakeMerchantId);

            expect(cloverApiOrderTypeElementRes).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiOrderTypeElementResModel);
        });

        it('should throw error, invalid access token', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.listOrderType(fakeMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });

        it('should throw error, invalid merchant id', async () => {
            mock.onGet(`/v3/merchants/${fakeInvalidMerchantId}/order_types`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.listOrderType(fakeInvalidMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });

    describe('#getDefaultService', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(200, cloverApiDefaultServiceChargeModel);
            const res: CloverApiDefaultServiceChargeModel = await cloverApiMerchant.getDefaultService(fakeMerchantId);

            expect(cloverApiDefaultServiceChargeModel).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiDefaultServiceChargeModel);
        });

        it('should throw error, invalid access token', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.getDefaultService(fakeMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });

        it('should throw error, invalid merchant id', async () => {
            mock.onGet(`/v3/merchants/${fakeInvalidMerchantId}/default_service_charge`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.getDefaultService(fakeInvalidMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });

    describe('#retrieve', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(200, cloverApiMerchantResModel);
            const res: CloverApiMerchantResModel = await cloverApiMerchant.retrieve(fakeMerchantId);

            expect(cloverApiMerchantResModel).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiMerchantResModel);
        });

        it('should throw error, invalid access token', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.retrieve(fakeMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });

        it('should throw error, invalid merchant id', async () => {
            mock.onGet(`/v3/merchants/${fakeInvalidMerchantId}`).reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiMerchant.retrieve(fakeInvalidMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });
});
