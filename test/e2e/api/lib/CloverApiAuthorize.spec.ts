import MockAdapter from 'axios-mock-adapter';
import { CloverApiAuthorize } from '../../../../src/api';

describe('CloverApiAuthorize (e2e)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const appId: string = 'fakeAppId';
    const appSecret: string = 'fakeAppSecret';
    const fakeInvalidAppSecret: string = 'fakeInvalidAppSecret';
    const fakeInvalidAppId: string = 'fakeInvalidAppId';
    const fakeCode: string = 'd6d8eb73-d3ca-624a-5900-1014236c8c21';
    const fakeInvalidCode: string = 'fakeInvalidCode';

    let authorize: CloverApiAuthorize;
    let mock: MockAdapter;

    beforeEach(() => {
        authorize = new CloverApiAuthorize({ baseUrl });
        mock = new MockAdapter(authorize.client);
    });

    describe('#confirm', () => {
        it('should not retry with status 400 (fakeInvalidAppSecret)', async () => {
            mock.onGet(`/oauth/token`).reply(400, {
                message: 'Invalid OAuth credentials',
            });

            await authorize.confirm(appId, fakeInvalidAppSecret, fakeCode).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('Invalid OAuth credentials');
            });
        });

        it('should not retry with status 400 (fakeInvalidAppId)', async () => {
            mock.onGet(`/oauth/token`).reply(400, {
                message: 'Unknown Client ID',
            });

            await authorize.confirm(fakeInvalidAppId, appSecret, fakeCode).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('Unknown Client ID');
            });
        });

        it('should not retry with status 400 (fakeInvalidCode)', async () => {
            mock.onGet(`/oauth/token`).reply(400, {
                message: 'Invalid OAuth credentials',
            });

            await authorize.confirm(appId, appSecret, fakeInvalidCode).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual('Invalid OAuth credentials');
            });
        });

        it('should do 1 retry with status 500', async () => {
            authorize = new CloverApiAuthorize({ baseUrl, maxRetries: 1 });
            mock = new MockAdapter(authorize.client);
            mock.onGet(`/oauth/token`).reply(500);

            await authorize.confirm(appId, appSecret, fakeCode).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 503', async () => {
            authorize = new CloverApiAuthorize({ baseUrl, maxRetries: 1 });
            mock = new MockAdapter(authorize.client);
            mock.onGet(`/oauth/token`).reply(503);

            await authorize.confirm(appId, appSecret, fakeCode).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });

        it('should do 1 retry with status 504', async () => {
            authorize = new CloverApiAuthorize({ baseUrl, maxRetries: 1 });
            mock = new MockAdapter(authorize.client);
            mock.onGet(`/oauth/token`).reply(504);

            await authorize.confirm(appId, appSecret, fakeCode).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        });
    });
});
