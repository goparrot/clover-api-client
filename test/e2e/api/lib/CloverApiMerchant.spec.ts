import MockAdapter from 'axios-mock-adapter';
import { CloverApiMerchant } from '../../../../src/api';

describe('CloverApiMerchant (e2e)', () => {
    let cloverApiMerchant: CloverApiMerchant;
    let mock: MockAdapter;
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';

    beforeEach(() => {
        cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiMerchant.client);
    });

    describe('#listOrderType', () => {
        it('should not retry with status 401', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(500);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(500);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(503);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(503);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(504);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/order_types`).reply(504);

            await cloverApiMerchant.listOrderType(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });

    describe('#getDefaultService', () => {
        it('should not retry with status 401', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(500);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(500);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(503);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(503);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(504);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/default_service_charge`).reply(504);

            await cloverApiMerchant.getDefaultService(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });

    describe('#retrieve', () => {
        it('should not retry with status 401', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(500);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(500);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(503);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(503);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(504);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            cloverApiMerchant = new CloverApiMerchant({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiMerchant.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}`).reply(504);

            await cloverApiMerchant.retrieve(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });
});
