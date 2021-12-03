import MockAdapter from 'axios-mock-adapter';
import { CloverApiCustomer } from '../../../../src/api';

describe('CloverApiCustomer (e2e)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeMerchantId: string = 'fakeMerchantId';
    const fakeCustomerId: string = 'fakeCustomerId';
    const fakeInvalidCustomerId: string = 'fakeInvalidCustomerId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';

    let cloverApiCustomer: CloverApiCustomer;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiCustomer.client);
    });

    describe('#retriver', () => {
        it('should not retry with status 401', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiCustomer.retrieve(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should not retry with status 404', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeInvalidCustomerId}`).reply(404);

            await cloverApiCustomer.retrieve(fakeMerchantId, fakeInvalidCustomerId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 1 retry with status 500', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(500);

            await cloverApiCustomer.retrieve(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 503', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(503);

            await cloverApiCustomer.retrieve(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(504);

            await cloverApiCustomer.retrieve(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });

    describe('#list', () => {
        it('should not retry with status 401', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiCustomer.list(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should do 1 retry with status 500', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers`).reply(500);

            await cloverApiCustomer.list(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 503', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers`).reply(503);

            await cloverApiCustomer.list(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/customers`).reply(504);

            await cloverApiCustomer.list(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });

    describe('#delete', () => {
        it('Should not retry with status 401', async () => {
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(401, { message: '401 Unauthorized' });

            await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeInvalidCustomerId}`).reply(404, {
                details: 'Customer not found',
                message: 'Not Found',
            });

            await cloverApiCustomer.delete(fakeMerchantId, fakeInvalidCustomerId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(429);

            await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 1 retry with status 500', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(500);

            await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 503', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(503);

            await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            cloverApiCustomer = new CloverApiCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverApiCustomer.client);
            mock.onDelete(`/v3/merchants/${fakeMerchantId}/customers/${fakeCustomerId}`).reply(504);

            await cloverApiCustomer.delete(fakeMerchantId, fakeCustomerId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });
});
