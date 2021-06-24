import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiCustomOrderRes, ICloverApiCustomLineItemReq, ICloverApiCustomOrderLineItemRes } from '../../../../src/api';
import { CloverApiOrder, CloverApiCustomOrderLineItemResModel, CloverApiCustomOrderResModel } from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverApiOrder (spec)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
    const fakeOrderId: string = 'fakeOrderId';
    const fakeInvalidOrderId: string = 'fakeInvalidOrderId';

    let cloverApiOrder: CloverApiOrder;
    let mock: MockAdapter;

    const cloverApiCustomOrderRes: ICloverApiCustomOrderRes = {
        href: `${baseUrl}/v3/merchants/${fakeMerchantId}/orders/fakeOrderId`,
        id: 'SDMKTXH7417AY',
        currency: 'USD',
        employee: {
            id: 'MEBZE2SG4VZEJ',
        },
        taxRemoved: false,
        isVat: false,
        manualTransaction: false,
        groupLineItems: true,
        testMode: false,
        createdTime: 1624009537000,
        clientCreatedTime: 1624009532000,
        modifiedTime: 1624009538000,
    };

    const cloverApiCustomLineItemReq: ICloverApiCustomLineItemReq = {
        price: 1200,
        name: 'Goparrot',
    };

    const cloverApiCustomLineItemRes: ICloverApiCustomOrderLineItemRes = {
        id: fakeOrderId,
        orderRef: {
            id: 'Y575YS2PJTW4W',
        },
        name: 'Goparrot',
        price: 1200,
        printed: false,
        createdTime: 1624006449000,
        orderClientCreatedTime: 1624006107000,
        exchanged: false,
        refunded: false,
        isRevenue: true,
    };

    beforeEach(() => {
        cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiOrder.client);
    });

    describe('#createCustom', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(200, cloverApiCustomOrderRes);
            const res: CloverApiCustomOrderResModel = await cloverApiOrder.createCustom(fakeMerchantId);

            expect(cloverApiCustomOrderRes).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiCustomOrderResModel);
        });

        it('should throw error, unauthorized', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiOrder.createCustom(fakeMerchantId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });
    });

    describe('#addCustomLineItem', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(200, cloverApiCustomLineItemRes);

            const res: CloverApiCustomOrderLineItemResModel = await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq);

            expect(res).toBeInstanceOf(CloverApiCustomOrderLineItemResModel);
            expect(res).toEqual(cloverApiCustomLineItemRes);
        });

        it('should throw error, unauthorized', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });

        it('should throw error, invalid line item', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, { name: 'GoParrot' }).reply(400, {
                message: 'Invalid line item',
            });

            // @ts-expect-error
            await expect(cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, { name: 'GoParrot' })).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"message":"Invalid line item"}`,
            });
        });

        it('should throw error, resource could not be found', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeInvalidOrderId}/line_items`, cloverApiCustomLineItemReq).reply(404, {
                details: 'The requested resource could not be found.',
                message: 'Not Found',
            });

            await expect(cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeInvalidOrderId, cloverApiCustomLineItemReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"details":"The requested resource could not be found.","message":"Not Found"}`,
            });
        });

        it('should throw error, merchant not found', async () => {
            mock.onPost(`/v3/merchants/${fakeInvalidMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiOrder.addCustomLineItem(fakeInvalidMerchantId, fakeOrderId, cloverApiCustomLineItemReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });
    });
});
