import MockAdapter from 'axios-mock-adapter';
import { CloverApiInventoryItem } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';

describe('CloverApiInventoryItem (e2e)', () => {
    let cloverInventoryItem: CloverApiInventoryItem;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryItem = new CloverApiInventoryItem({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryItem.client);
    });

    describe('#getAll', () => {
        it('should not retry with status 400', async () => {
            const detailedErrorMessage = "Unable to parse filter: 'modifier'";
            const errorMessage = '400 Bad Request';
            const errorType = 'invalid_request_error';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(400, {
                message: errorMessage,
                error: {
                    type: errorType,
                    code: 400,
                    message: detailedErrorMessage,
                },
            });

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 400, Response: {"message":"${errorMessage}","error":{"type":"${errorType}","code":400,"message":"${detailedErrorMessage}"}}`,
                );
            });
        });

        it('Should not retry with status 401', async () => {
            const errorMessage = '401 Unauthorized';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(401, {
                message: errorMessage,
            });

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual(errorMessage);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(429);

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 404', async () => {
            cloverInventoryItem = new CloverApiInventoryItem({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryItem.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(404);

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 1 retry with status 503', async () => {
            cloverInventoryItem = new CloverApiInventoryItem({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryItem.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(503);

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        }, 10_000);

        it('should do 1 retries with status 504', async () => {
            cloverInventoryItem = new CloverApiInventoryItem({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryItem.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/items`).reply(504);

            await cloverInventoryItem.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        }, 10_000);
    });
});
