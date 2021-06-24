import MockAdapter from 'axios-mock-adapter';
import { CloverOrder } from '../../../../src/ecommerce';

describe('CloverOrder (e2e)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeOrderId: string = 'fakeOrderId';
    const fakeSource: string = 'fakeSource';
    const fakeInvalidSource: string = 'fakeInvalidSource';

    let cloverOrder: CloverOrder;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverOrder = new CloverOrder({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverOrder.client);
    });

    describe('#pay', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeInvalidSource }).reply(400);

            await cloverOrder.pay(fakeOrderId, { source: fakeInvalidSource }).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            cloverOrder = new CloverOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(401);

            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(404);
            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(429);

            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(500);

            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 503', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(503);

            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 504', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(504);

            await cloverOrder.pay(fakeOrderId, { source: fakeSource }).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#return', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(400);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 401', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(401);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(404);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(429);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 500', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(500);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 503', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(503);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 504', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(504);
            await cloverOrder.return(fakeOrderId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });
});
