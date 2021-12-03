import MockAdapter from 'axios-mock-adapter';
import { CloverRefund } from '../../../../src/ecommerce';
import type { ICloverRefundReq } from '../../../../src/ecommerce';

describe('CloverRefund (e2e)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeRefundId: string = 'fakeRefundId';
    const fakeInvalidRefundId: string = 'fakeInvalidRefundId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const cloverRefundReq: ICloverRefundReq = {
        charge: '8CCA17W869QWY',
        amount: 100,
    };

    let cloverRefund: CloverRefund;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverRefund.client);
    });

    describe('#create', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost('/v1/refunds').reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'processing_error',
                    message: "This refund would make the order's total refunded amount greater than the original order's amount.",
                },
            });

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"code":"processing_error","message":"This refund would make the order\'s total refunded amount greater than the original order\'s amount."}}',
                );
            });
        });

        it('Should not retry with status 401', async () => {
            mock.onPost('/v1/refunds').reply(401, {
                message: '401 Unauthorized',
            });

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onPost('/v1/refunds').reply(404, {
                message: '404 Not Found',
                error: {
                    code: 'processing_error',
                    message: 'Not Found',
                },
            });

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 404, Response: {"message":"404 Not Found","error":{"code":"processing_error","message":"Not Found"}}',
                );
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPost('/v1/refunds').reply(429);

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            mock.onPost('/v1/refunds').reply(500);

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 503', async () => {
            mock.onPost('/v1/refunds').reply(503);

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 504', async () => {
            mock.onPost('/v1/refunds').reply(504);

            await cloverRefund.create(cloverRefundReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#retrieve', () => {
        it('Should not retry with status 401', async () => {
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverRefund.retrieve(fakeRefundId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onGet(`/v1/refunds/${fakeInvalidRefundId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    code: 'processing_error',
                    message: 'Not Found',
                },
            });

            await cloverRefund.retrieve(fakeInvalidRefundId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 404, ' + 'Response: {"message":"404 Not Found","error":{"code":"processing_error","message":"Not Found"}}',
                );
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(429);

            await cloverRefund.retrieve(fakeRefundId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 1 retry with status 500', async () => {
            cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverRefund.client);
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(500);

            await cloverRefund.retrieve(fakeRefundId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 503', async () => {
            cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverRefund.client);
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(503);

            await cloverRefund.retrieve(fakeRefundId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverRefund.client);
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(504);

            await cloverRefund.retrieve(fakeRefundId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });

    describe('#list', () => {
        it('Should not retry with status 401', async () => {
            mock.onGet('/v1/refunds').reply(401, {
                message: '401 Unauthorized',
            });

            await cloverRefund.list().catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('Should not retry with status 429', async () => {
            mock.onGet('/v1/refunds').reply(429);

            await cloverRefund.list().catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 429');
            });
        });

        it('should do 1 retry with status 500', async () => {
            cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverRefund.client);
            mock.onGet('/v1/refunds').reply(500);

            await cloverRefund.list().catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverRefund.client);
            mock.onGet('/v1/refunds').reply(504);

            await cloverRefund.list().catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });
});
