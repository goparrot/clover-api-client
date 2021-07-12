import MockAdapter from 'axios-mock-adapter';
import type {
    ICloverApiCustomOrderRes,
    ICloverApiCustomLineItemReq,
    ICloverApiCustomOrderLineItemRes,
    ICloverApiAtomicOrderReq,
    ICloverApiCheckoutAtomicOrderRes,
    ICloverApiAtomicOrderRes,
} from '../../../../src/api';
import {
    CloverApiOrder,
    CloverApiCustomOrderLineItemResModel,
    CloverApiCustomOrderResModel,
    CloverApiCheckoutAtomicOrderResModel,
    CloverApiAtomicOrderResModel,
} from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverApiOrder (unit)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeInvalidMerchantId: string = 'fakeInvalidMerchantId';
    const fakeOrderId: string = 'fakeOrderId';
    const fakeInvalidOrderId: string = 'fakeInvalidOrderId';

    let cloverApiOrder: CloverApiOrder;
    let mock: MockAdapter;

    const cloverApiAtomicOrderReq: ICloverApiAtomicOrderReq = {
        orderCart: {
            lineItems: [
                {
                    item: {
                        id: 'ZKSKN4F9B7Q94',
                    },
                },
            ],
        },
    };
    const cloverApiCheckoutAtomicOrderRes: ICloverApiCheckoutAtomicOrderRes = {
        orderCart: {
            discounts: {
                elements: [],
            },
            lineItems: {
                elements: [
                    {
                        item: {
                            id: 'ZKSKN4F9B7Q94',
                        },
                        name: 'Test_Item',
                        price: 800,
                        discounts: {
                            elements: [],
                        },
                        exchanged: false,
                        modifications: {
                            elements: [],
                        },
                        refunded: false,
                        isRevenue: false,
                        taxRates: {
                            elements: [
                                {
                                    id: 'F8G994S7C47YC',
                                    name: 'NO_TAX_APPLIED',
                                    rate: 0,
                                    isDefault: false,
                                },
                            ],
                        },
                    },
                ],
            },
            merchant: {},
        },
        total: 800,
        subtotal: 800,
        totalTaxAmount: 0,
        taxSummaries: {
            elements: [
                {
                    id: 'F8G994S7C47YC',
                    name: 'NO_TAX_APPLIED',
                    amount: 0,
                    rate: 0,
                },
            ],
        },
        isVat: false,
    };
    const cloverApiAtomicOrderRes: ICloverApiAtomicOrderRes = {
        href: 'https://sandbox.dev.clover.com/v3/merchants/T76Z4HS2WS0S1/orders/2C453GQ15BWS8',
        id: '2C453GQ15BWS8',
        currency: 'USD',
        employee: {
            href: 'https://sandbox.dev.clover.com/v3/merchants/T76Z4HS2WS0S1/employees/MEBZE2SG4VZEJ',
            id: 'MEBZE2SG4VZEJ',
            name: 'Ariel David',
            role: 'ADMIN',
            orders: {
                href: 'https://sandbox.dev.clover.com/v3/merchants/T76Z4HS2WS0S1/employees/MEBZE2SG4VZEJ/orders',
            },
        },
        total: 800,
        taxRemoved: false,
        isVat: false,
        state: 'OPEN',
        manualTransaction: false,
        groupLineItems: false,
        testMode: false,
        createdTime: 1625233671000,
        clientCreatedTime: 1625233671000,
        modifiedTime: 1625233670000,
        lineItems: {
            elements: [
                {
                    id: '115D4DKXPW7ST',
                    orderRef: {
                        id: '2C453GQ15BWS8',
                    },
                    item: {
                        id: 'ZKSKN4F9B7Q94',
                    },
                    name: 'Test_Item',
                    price: 800,
                    printed: false,
                    createdTime: 1625233671000,
                    orderClientCreatedTime: 1625233671000,
                    exchanged: false,
                    refunded: false,
                    isRevenue: false,
                    taxRates: {
                        elements: [
                            {
                                id: 'F8G994S7C47YC',
                                lineItemRef: {
                                    id: '115D4DKXPW7ST',
                                },
                                name: 'NO_TAX_APPLIED',
                                rate: 0,
                                isDefault: false,
                            },
                        ],
                    },
                },
            ],
        },
    };
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

    describe('#checkoutAtomic', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(200, cloverApiCheckoutAtomicOrderRes);
            const res: CloverApiCheckoutAtomicOrderResModel = await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq);

            expect(cloverApiCheckoutAtomicOrderRes).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiCheckoutAtomicOrderResModel);
        });

        it('should throw error, unauthorized', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, {}).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });

        it('should throw error, cart is empty', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, {}).reply(400, {
                details: 'Cart is empty or missing',
                message: 'cart_is_empty_or_missing',
            });

            // @ts-expect-error
            await expect(cloverApiOrder.checkoutAtomic(fakeMerchantId, {})).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"details":"Cart is empty or missing","message":"cart_is_empty_or_missing"}`,
            });
        });

        it('should throw error, item id not found', async () => {
            const data: ICloverApiAtomicOrderReq = { orderCart: { lineItems: [{ item: { id: 'fakeNotFoundItemId' } }] } };

            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, data).reply(400, {
                details: 'fakeNotFoundItemId',
                message: 'item_does_not_exist',
            });

            await expect(cloverApiOrder.checkoutAtomic(fakeMerchantId, data)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"details":"fakeNotFoundItemId","message":"item_does_not_exist"}`,
            });
        });
    });

    describe('#createAtomic', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(200, cloverApiAtomicOrderRes);
            const res: CloverApiAtomicOrderResModel = await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq);

            expect(cloverApiAtomicOrderRes).toEqual(res);
            expect(res).toBeInstanceOf(CloverApiAtomicOrderResModel);
        });

        it('should throw error, unauthorized', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, {}).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });

        it('should throw error, cart is empty', async () => {
            // @ts-expect-error
            const data: ICloverApiAtomicOrderReq = {};
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, data).reply(400, {
                details: 'Cart is empty or missing',
                message: 'cart_is_empty_or_missing',
            });

            await expect(cloverApiOrder.createAtomic(fakeMerchantId, data)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"details":"Cart is empty or missing","message":"cart_is_empty_or_missing"}`,
            });
        });

        it('should throw error, item id not found', async () => {
            const data: ICloverApiAtomicOrderReq = { orderCart: { lineItems: [{ item: { id: 'fakeNotFoundItemId' } }] } };

            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, data).reply(400, {
                details: 'fakeNotFoundItemId',
                message: 'item_does_not_exist',
            });

            await expect(cloverApiOrder.createAtomic(fakeMerchantId, data)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"details":"fakeNotFoundItemId","message":"item_does_not_exist"}`,
            });
        });
    });
});
