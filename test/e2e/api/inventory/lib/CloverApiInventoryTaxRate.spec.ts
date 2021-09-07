import MockAdapter from 'axios-mock-adapter';
import { CloverApiInventoryTaxRate, defaultMaxRetries } from '../../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../../common';

describe('CloverApiInventoryTaxRate (e2e)', () => {
    let cloverInventoryTaxRate: CloverApiInventoryTaxRate;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryTaxRate = new CloverApiInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryTaxRate.client);
    });

    describe('#getAll', () => {
        it('should not retry with status 400', async () => {
            const detailedErrorMessage = "Unable to parse filter: 'sort'";
            const errorMessage = '400 Bad Request';
            const errorType = 'invalid_request_error';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(400, {
                message: errorMessage,
                error: {
                    type: errorType,
                    code: 400,
                    message: detailedErrorMessage,
                },
            });

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 400, Response: {"message":"${errorMessage}","error":{"type":"${errorType}","code":400,"message":"${detailedErrorMessage}"}}`,
                );
            });
        });

        it('Should not retry with status 401', async () => {
            const errorMessage = '401 Unauthorized';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(401, {
                message: errorMessage,
            });

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual(errorMessage);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(429);

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 404', async () => {
            cloverInventoryTaxRate = new CloverApiInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryTaxRate.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(404);

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(500);

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(defaultMaxRetries);
            });
        }, 20_000);

        it('should do 2 retries with status 503', async () => {
            cloverInventoryTaxRate = new CloverApiInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryTaxRate.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(503);

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(2);
            });
        }, 10_000);

        it('should do 1 retries with status 504', async () => {
            cloverInventoryTaxRate = new CloverApiInventoryTaxRate({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryTaxRate.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/tax_rates`).reply(504);

            await cloverInventoryTaxRate.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        }, 10_000);
    });
});
