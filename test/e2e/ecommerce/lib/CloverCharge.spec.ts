import MockAdapter from 'axios-mock-adapter';
import { CloverCharge } from '../../../../src/ecommerce';
import type { ICloverChargeReq } from '../../../../src/ecommerce';

describe('CloverCharge (e2e)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeChargeId: string = 'fakeChargeId';
    const fakeInvalidChargeId: string = 'fakeInvalidChargeId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';
    const cloverChargeReq: ICloverChargeReq = {
        source: 'clv_2TSTE8kqAc46ct2fzQuaTGN5',
        amount: 100,
        currency: 'usd',
        capture: false,
        idempotencyKey: '61b71757-410d-42f8-9c49-38396546870e',
    };

    let cloverCharge: CloverCharge;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverCharge.client);
    });

    describe('#create', () => {
        it('Should not retry with status 400', async () => {
            mock.onPost('/v1/charges', cloverChargeReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'token_already_used',
                    message: 'You cannot use a clover token more than once unless it is marked as multipay.',
                },
            });

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 400, ' +
                        'Response: {"message":"400 Bad Request","error":{"code":"token_already_used","message":"You cannot use a clover token more than once unless it is marked as multipay."}}',
                );
            });
        });

        it('Should not retry with status 401', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock = new MockAdapter(cloverCharge.client);
            mock.onPost('/v1/charges', cloverChargeReq).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('401 Unauthorized');
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPost('/v1/charges', cloverChargeReq).reply(429);

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            mock.onPost('/v1/charges', cloverChargeReq).reply(500);

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 503', async () => {
            mock.onPost('/v1/charges', cloverChargeReq).reply(503);

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 504', async () => {
            mock.onPost('/v1/charges', cloverChargeReq).reply(504);

            await cloverCharge.create(cloverChargeReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#capture', () => {
        it('should not retry with status 400', async () => {
            mock.onPost(`/v1/charges/${fakeInvalidChargeId}/capture`).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Please provide a valid charge id.',
                },
            });

            await cloverCharge.capture(fakeInvalidChargeId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_request","message":"Please provide a valid charge id."}}',
                );
            });
        });

        it('Should not retry with status 401', async () => {
            mock.onPost(`/v1/charges/${fakeInvalidChargeId}/capture`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCharge.capture(fakeInvalidChargeId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('401 Unauthorized');
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPost(`/v1/charges/${fakeChargeId}/capture`).reply(429);

            await cloverCharge.capture(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            mock.onPost(`/v1/charges/${fakeChargeId}/capture`).reply(500);

            await cloverCharge.capture(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 503', async () => {
            mock.onPost(`/v1/charges/${fakeChargeId}/capture`).reply(503);

            await cloverCharge.capture(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 504', async () => {
            mock.onPost(`/v1/charges/${fakeChargeId}/capture`).reply(504);

            await cloverCharge.capture(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#retrieve', () => {
        it('Should not retry with status 401', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('401 Unauthorized');
            });
        });

        it('should not retry with status 404', async () => {
            mock.onGet(`/v1/charges/${fakeInvalidChargeId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Charge with id ${fakeInvalidChargeId} not found.`,
                },
            });

            await cloverCharge.retrieve(fakeInvalidChargeId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Charge with id ${fakeInvalidChargeId} not found."}}`,
                );
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(429);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);

            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(500);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(500);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(503);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(503);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(504);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(504);

            await cloverCharge.retrieve(fakeChargeId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20000);
    });

    describe('#list', () => {
        it('Should not retry with status 401', async () => {
            mock.onGet('/v1/charges').reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should not retry with status 422', async () => {
            mock.onGet('/v1/charges').reply(422);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(422);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);
            mock.onGet('/v1/charges').reply(500);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onGet('/v1/charges').reply(500);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);
            mock.onGet('/v1/charges').reply(503);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            mock.onGet('/v1/charges').reply(503);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverCharge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCharge.client);
            mock.onGet('/v1/charges').reply(504);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            mock.onGet('/v1/charges').reply(504);

            await cloverCharge.list().catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });
});
