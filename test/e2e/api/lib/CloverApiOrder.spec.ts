import MockAdapter from 'axios-mock-adapter';
import type { ICloverApiCustomLineItemReq, ICloverApiAtomicOrderReq } from '../../../../src/api';
import { CloverApiOrder } from '../../../../src/api';

describe('CloverApiOrder (e2e)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeOrderId: string = 'fakeOrderId';
    const cloverApiCustomLineItemReq: ICloverApiCustomLineItemReq = {
        price: 1200,
    };
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

    let cloverApiOrder: CloverApiOrder;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiOrder.client);
    });

    describe('#createCustom', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(400);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(401);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(429);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 500', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(500);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 503', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(503);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 504', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders`).reply(504);
            await cloverApiOrder.createCustom(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#addCustomLineItem', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(400);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(401);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(404);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(429);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 500', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(500);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 503', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(503);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 504', async () => {
            mock.onPost(`/v3/merchants/${fakeMerchantId}/orders/${fakeOrderId}/line_items`, cloverApiCustomLineItemReq).reply(504);

            await cloverApiOrder.addCustomLineItem(fakeMerchantId, fakeOrderId, cloverApiCustomLineItemReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#checkoutAtomic', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(400);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(401);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(429);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 500', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(500);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 503', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(503);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 504', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/checkouts`, cloverApiAtomicOrderReq).reply(504);

            await cloverApiOrder.checkoutAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#createAtomic', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(400);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            cloverApiOrder = new CloverApiOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(401);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(429);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 500', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(500);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 503', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(503);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 504', async () => {
            mock.onPost(`v3/merchants/${fakeMerchantId}/atomic_order/orders`, cloverApiAtomicOrderReq).reply(504);

            await cloverApiOrder.createAtomic(fakeMerchantId, cloverApiAtomicOrderReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });
});
