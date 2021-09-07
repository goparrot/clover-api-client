import MockAdapter from 'axios-mock-adapter';
import { CloverApiInventoryModifierGroups, defaultMaxRetries } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';

describe('CloverApiInventoryModifierGroups (e2e)', () => {
    let cloverInventoryModifierGroups: CloverApiInventoryModifierGroups;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryModifierGroups = new CloverApiInventoryModifierGroups({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryModifierGroups.client);
    });

    describe('#getAll', () => {
        it('should not retry with status 400', async () => {
            const detailedErrorMessage = "Unable to parse filter: 'sort'";
            const errorMessage = '400 Bad Request';
            const errorType = 'invalid_request_error';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(400, {
                message: errorMessage,
                error: {
                    type: errorType,
                    code: 400,
                    message: detailedErrorMessage,
                },
            });

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 400, Response: {"message":"${errorMessage}","error":{"type":"${errorType}","code":400,"message":"${detailedErrorMessage}"}}`,
                );
            });
        });

        it('Should not retry with status 401', async () => {
            const errorMessage = '401 Unauthorized';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(401, {
                message: errorMessage,
            });

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual(errorMessage);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(429);

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 404', async () => {
            cloverInventoryModifierGroups = new CloverApiInventoryModifierGroups({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryModifierGroups.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(404);

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(500);

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(defaultMaxRetries);
            });
        }, 20_000);

        it('should do 2 retries with status 503', async () => {
            cloverInventoryModifierGroups = new CloverApiInventoryModifierGroups({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryModifierGroups.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(503);

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(2);
            });
        }, 10_000);

        it('should do 1 retries with status 504', async () => {
            cloverInventoryModifierGroups = new CloverApiInventoryModifierGroups({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryModifierGroups.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifier_groups`).reply(504);

            await cloverInventoryModifierGroups.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        }, 10_000);
    });
});
