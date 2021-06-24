import MockAdapter from 'axios-mock-adapter';
import { CloverEcomindEnum, CloverCustomer } from '../../../../src/ecommerce';
import type { ICloverCustomerReq } from '../../../../src/ecommerce';

describe('CloverCustomer (e2e)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeCustomerId: string = 'fakeCustomerId';
    const fakeInvalidCustomerId: string = 'fakeInvalidCustomerId';
    const fakeCardId: string = 'fakeCardId';
    const cloverCustomerReq: ICloverCustomerReq = {
        ecomind: CloverEcomindEnum.ECOM,
        email: 'test.u@goparrot.ai',
        source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
    };

    let cloverCustomer: CloverCustomer;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverCustomer.client);
    });

    describe('#create', () => {
        it('Should not retry with status 400', async () => {
            // @ts-expect-error
            const cloverCustomerReq: ICloverCustomerReq = {
                ecomind: CloverEcomindEnum.ECOM,
                source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
            };
            mock.onPost('/v1/customers', cloverCustomerReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'email_invalid',
                    message: 'Please provide a valid email.',
                },
            });

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 400, ' +
                        'Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"email_invalid","message":"Please provide a valid email."}}',
                );
            });
        });

        it('Should not retry with status 401', async () => {
            mock.onPost('/v1/customers', cloverCustomerReq).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPost('/v1/customers', cloverCustomerReq).reply(429);

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            mock.onPost('/v1/customers', cloverCustomerReq).reply(500);

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 500', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onPost('/v1/customers', cloverCustomerReq).reply(500);

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 503', async () => {
            mock.onPost('/v1/customers', cloverCustomerReq).reply(503);

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should not retry with status 504', async () => {
            mock.onPost('/v1/customers', cloverCustomerReq).reply(504);

            await cloverCustomer.create(cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });
    });

    describe('#update', () => {
        it('Should not retry with status 400', async () => {
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'invalid_cvc',
                    message: 'CVV not found during card verification for Clover token clv_1TSTSbTqtMyxMBUhGdF1isQE',
                },
            });

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(400);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"code":"invalid_cvc","message":"CVV not found during card verification for Clover token clv_1TSTSbTqtMyxMBUhGdF1isQE"}}',
                );
            });
        });

        it('Should not retry with status 401', async () => {
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('should not retry with status 404', async () => {
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'validation_error',
                    code: 'resource_missing',
                    message: 'Customer with id 8CPDBJGX3T7V1 not found.',
                },
            });

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    'Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"validation_error","code":"resource_missing","message":"Customer with id 8CPDBJGX3T7V1 not found."}}',
                );
            });
        });

        it('should not retry with status 429', async () => {
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(429);

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(500);

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 500', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(500);

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 3 retries with status 503', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(503);

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 3 retries with status 504', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(504);

            await cloverCustomer.update(fakeCustomerId, cloverCustomerReq).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });
    });

    describe('#revoke', () => {
        it('Should not retry with status 401', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(401, {
                message: '401 Unauthorized',
            });

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(401);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual('Request failed with status code 401, Response: {"message":"401 Unauthorized"}');
            });
        });

        it('Should not retry with status 404', async () => {
            mock.onDelete(`/v1/customers/${fakeInvalidCustomerId}/sources/${fakeCardId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Customer with id ${fakeCustomerId} not found.`,
                },
            });

            await cloverCustomer.revoke(fakeInvalidCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(404);
                expect(e.config['axios-retry'].retryCount).toBe(0);
                expect(e.message).toEqual(
                    `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Customer with id ${fakeCustomerId} not found."}}`,
                );
            });
        });

        it('should not retry with status 429', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(429);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(429);
                expect(e.config['axios-retry'].retryCount).toBe(0);
            });
        });

        it('should do 3 retries with status 500', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(500);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 500', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(500);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(500);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 503', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(503);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 503', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(503);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(503);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);

        it('should do 3 retries with status 504', async () => {
            cloverCustomer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken, maxRetries: 3 });
            mock = new MockAdapter(cloverCustomer.client);
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(504);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(3);
            });
        });

        it('should do 6 retries with status 504', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(504);

            await cloverCustomer.revoke(fakeCustomerId, fakeCardId).catch((e) => {
                expect(e.response.status).toBe(504);
                expect(e.config['axios-retry'].retryCount).toBe(6);
            });
        }, 20_000);
    });
});
