import MockAdapter from 'axios-mock-adapter';
import { CloverApiCustomer, CloverApiCustomerResModel, CloverApiCustomerListResModel } from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverApiCustomer (unit)', () => {
    let cloverApiCustomer: CloverApiCustomer;
    let mock: MockAdapter;
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeCustomerId: string = 'fakeCustomerId';
    const cloverApiCustomerResModel: CloverApiCustomerResModel = {
        href: `https://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`,
        id: fakeCustomerId,
        marketingAllowed: false,
        customerSince: 1619008646000,
    };
    const fakeAccessToken: string = 'fakeAccessToken';

    const cloverApiCustomerListResModel: CloverApiCustomerListResModel = {
        elements: [cloverApiCustomerResModel],
        href: `http://sandbox.dev.clover.com/v3/merchants/${fakeMerchantId}/customers?limit=100`,
    };

    beforeEach(() => {
        cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiCustomer.client);
    });

    describe('#retrieve', () => {
        it('should return plain to class data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(200, cloverApiCustomerResModel);
            const data: CloverApiCustomerResModel = await cloverApiCustomer.retrieve(fakeMerchantId, fakeCustomerId);

            expect(cloverApiCustomerResModel).toEqual(data);
            expect(data).toBeInstanceOf(CloverApiCustomerResModel);
        });

        it('should throw error, invalid customer id', async () => {
            const fakeInvalidCustomerId: string = 'fakeInvalidCustomerId';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeInvalidCustomerId}`).reply(404, {
                details: 'Customer not found',
                message: 'Not Found',
            });

            await expect(cloverApiCustomer.retrieve(fakeMerchantId, fakeInvalidCustomerId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 404, Response: {"details":"Customer not found","message":"Not Found"}',
            });
        });

        it('should throw error, invalid merchant id', async () => {
            const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
            mock.onGet(`/v3/merchants/${fakeInvalidMerchantId}/customers/${fakeCustomerId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiCustomer.retrieve(fakeInvalidMerchantId, fakeCustomerId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });

    describe('#list', () => {
        it('should return plain to class data', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers`).reply(200, cloverApiCustomerListResModel);
            const data: CloverApiCustomerListResModel = await cloverApiCustomer.list(fakeMerchantId);

            expect(cloverApiCustomerListResModel).toEqual(data);
            expect(data).toBeInstanceOf(CloverApiCustomerListResModel);
        });

        it('should throw error, invalid merchant id', async () => {
            const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
            mock.onGet(`/v3/merchants/${fakeInvalidMerchantId}/customers`).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiCustomer.list(fakeInvalidMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });

    describe('#delete', () => {
        it('should throw error, invalid merchant id', async () => {
            const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
            mock.onDelete(`/v3/merchants/${fakeInvalidMerchantId}/customers/${fakeCustomerId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiCustomer.delete(fakeInvalidMerchantId, fakeCustomerId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });

        it('should throw error, invalid customer id', async () => {
            const fakeInvalidCustomerId: string = 'fakeInvalidCustomerId';
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeInvalidCustomerId}`).reply(404, {
                details: 'Customer not found',
                message: 'Not Found',
            });

            await expect(cloverApiCustomer.delete(fakeMerchantId, fakeInvalidCustomerId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 404, Response: {"details":"Customer not found","message":"Not Found"}',
            });
        });

        it('should delete customer', async () => {
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(200);

            expect(await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId)).toBeUndefined();
        });
    });
});
