import MockAdapter from 'axios-mock-adapter';
import { HttpStatus } from '@nestjs/common';
import { CloverInventoryModifier, defaultMaxRetries } from '../../../../src';
import { baseUrl, fakeAccessToken, fakeMerchantId } from '../../../common';

describe('CloverInventoryModifier (e2e)', () => {
    let cloverInventoryModifier: CloverInventoryModifier;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverInventoryModifier = new CloverInventoryModifier({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverInventoryModifier.client);
    });

    describe('#getAll', () => {
        it('should not retry with status 400', async () => {
            const detailedErrorMessage = "Unable to parse filter: 'modifier'";
            const errorMessage = '400 Bad Request';
            const errorType = 'invalid_request_error';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.BAD_REQUEST, {
                message: errorMessage,
                error: {
                    type: errorType,
                    code: HttpStatus.BAD_REQUEST,
                    message: detailedErrorMessage,
                },
            });

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 400, Response: {"message":"${errorMessage}","error":{"type":"${errorType}","code":${HttpStatus.BAD_REQUEST},"message":"${detailedErrorMessage}"}}`,
                );
            });
        });

        it('Should not retry with status 401', async () => {
            const errorMessage = '401 Unauthorized';
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.UNAUTHORIZED, {
                message: errorMessage,
            });

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.UNAUTHORIZED);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.response.data.message).toEqual(errorMessage);
            });
        });

        it('should not retry with status 429', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.TOO_MANY_REQUESTS);

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.TOO_MANY_REQUESTS);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 404', async () => {
            cloverInventoryModifier = new CloverInventoryModifier({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryModifier.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.NOT_FOUND);

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.NOT_FOUND);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.INTERNAL_SERVER_ERROR);

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.INTERNAL_SERVER_ERROR);
                expect(e.config['axios-retry'].retryCount).toBe(defaultMaxRetries);
            });
        }, 20_000);

        it('should do 2 retries with status 503', async () => {
            cloverInventoryModifier = new CloverInventoryModifier({ baseUrl, accessToken: fakeAccessToken, maxRetries: 2 });
            mock = new MockAdapter(cloverInventoryModifier.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.SERVICE_UNAVAILABLE);

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.SERVICE_UNAVAILABLE);
                expect(e.config['axios-retry'].retryCount).toBe(2);
            });
        }, 10_000);

        it('should do 1 retries with status 504', async () => {
            cloverInventoryModifier = new CloverInventoryModifier({ baseUrl, accessToken: fakeAccessToken, maxRetries: 1 });
            mock = new MockAdapter(cloverInventoryModifier.client);
            mock.onGet(`/v3/merchants/${fakeMerchantId}/modifiers`).reply(HttpStatus.GATEWAY_TIMEOUT);

            await cloverInventoryModifier.getAll(fakeMerchantId).catch((e) => {
                expect(e.response.status).toBe(HttpStatus.GATEWAY_TIMEOUT);
                expect(e.config['axios-retry'].retryCount).toBe(1);
            });
        }, 10_000);
    });
});
