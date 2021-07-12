import MockAdapter from 'axios-mock-adapter';
import { CloverApiKey } from '../../../../src/api';

describe('CloverApiKey (e2e)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';

    let cloverApiKey: CloverApiKey;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiKey.client);
    });

    describe('#retrieve', () => {
        it('should not retry with status 401 (fakeInvalidAccessToken)', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet('/pakms/apikey').reply(401, {
                message: '401 Unauthorized',
            });

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(500);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(500);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(503);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(503);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(504);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken });
            mock = new MockAdapter(cloverApiKey.client);
            mock.onGet('/pakms/apikey').reply(504);

            await cloverApiKey.retrieve().catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });
});
