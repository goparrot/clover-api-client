import MockAdapter from 'axios-mock-adapter';
import type { ICloverCustomerRes, ICloverCustomerReq, ICloverRevokeRes, ICloverUpdateCustomerReq } from '../../../../src/ecommerce';
import { CloverCustomer, CloverEcomindEnum, CloverCustomerResModel, CloverRevokeResModel } from '../../../../src/ecommerce';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverCustomer (unit)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const cloverCustomerRes: ICloverCustomerRes = {
        id: 'P2DYP3ABGRYY0',
        object: 'customer',
        created: 1620740476636,
        currency: 'USD',
        email: 'test.b@goparrot.ai',
        sources: {
            object: 'list',
            data: ['GZ4N0ZQTVBWR2'],
        },
        shipping: {},
    };
    const fakeCustomerId: string = 'fakeCustomerId';
    const fakeInvalidCustomerId: string = 'fakeInvalidCustomerId';
    const fakeCardId: string = 'fakeCardId';
    const fakeInvalidCardId: string = 'fakeInvalidCardId';
    const fakeAccessToken: string = 'fakeAccessToken';

    let customer: CloverCustomer;
    let mock: MockAdapter;

    beforeEach(() => {
        customer = new CloverCustomer({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(customer.client);
    });

    describe('#create', () => {
        it('should return plain to class data', async () => {
            const cloverCustomerReq: ICloverCustomerReq = {
                ecomind: CloverEcomindEnum.ECOM,
                email: 'test.u@goparrot.ai',
                source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
            };
            mock.onPost('/v1/customers', cloverCustomerReq).reply(200, cloverCustomerRes);
            const data: CloverCustomerResModel = await customer.create(cloverCustomerReq);

            expect(data).toBeInstanceOf(CloverCustomerResModel);
        });

        it('should throw error (email_invalid)', async () => {
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

            await expect(customer.create(cloverCustomerReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, ' +
                    'Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"email_invalid","message":"Please provide a valid email."}}',
            });
        });

        it('should throw error (invalid_request) provide a valid source or token', async () => {
            // @ts-expect-error
            const cloverCustomerReq: ICloverCustomerReq = {
                ecomind: CloverEcomindEnum.ECOM,
                email: 'test.u@goparrot.ai',
            };
            mock.onPost('/v1/customers', cloverCustomerReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Please provide a valid source or token.',
                },
            });

            await expect(customer.create(cloverCustomerReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_request","message":"Please provide a valid source or token."}}',
            });
        });
    });

    describe('#update', () => {
        it('should return plain to class data', async () => {
            const cloverCustomerReq: ICloverUpdateCustomerReq = {
                email: 'test.u@goparrot.ai',
                source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
            };
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(200, cloverCustomerRes);
            const data: CloverCustomerResModel = await customer.update(fakeCustomerId, cloverCustomerReq);

            expect(data).toBeInstanceOf(CloverCustomerResModel);
            expect(data).toEqual(cloverCustomerRes);
        });

        it('should throw error (invalid_request_error) provide a valid email', async () => {
            // @ts-expect-error
            const cloverCustomerReq: ICloverUpdateCustomerReq = {
                source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
            };
            mock.onPut(`/v1/customers/${fakeCustomerId}`).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'email_invalid',
                    message: 'Please provide a valid email.',
                },
            });

            await expect(customer.update(fakeCustomerId, cloverCustomerReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"email_invalid","message":"Please provide a valid email."}}',
            });
        });

        it('should throw error (invalid customer)', async () => {
            // @ts-expect-error
            const cloverCustomerReq: ICloverUpdateCustomerReq = {
                source: 'clv_1TSTSCJMRwAWdPSpPvSWokSF',
            };
            mock.onPut(`/v1/customers/${fakeInvalidCustomerId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'validation_error',
                    code: 'resource_missing',
                    message: `Customer with id ${fakeInvalidCustomerId} not found.`,
                },
            });

            await expect(customer.update(fakeInvalidCustomerId, cloverCustomerReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"validation_error","code":"resource_missing","message":"Customer with id ${fakeInvalidCustomerId} not found."}}`,
            });
        });
    });

    describe('#revoke', () => {
        it('should return plain data', async () => {
            const cloverRevokeRes: ICloverRevokeRes = {
                deleted: true,
                id: fakeCardId,
                object: 'deletedcard',
            };
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeCardId}`).reply(200, cloverRevokeRes);
            const data: CloverRevokeResModel = await customer.revoke(fakeCustomerId, fakeCardId);

            expect(data).toBeInstanceOf(CloverRevokeResModel);
            expect(data).toEqual(cloverRevokeRes);
        });

        it('should throw error (invalid_request) card id not found', async () => {
            mock.onDelete(`/v1/customers/${fakeCustomerId}/sources/${fakeInvalidCardId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Card with id ${fakeInvalidCardId} not found.`,
                },
            });

            await expect(customer.revoke(fakeCustomerId, fakeInvalidCardId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Card with id ${fakeInvalidCardId} not found."}}`,
            });
        });

        it('should throw error (invalid_request) customer id not found', async () => {
            mock.onDelete(`/v1/customers/${fakeInvalidCustomerId}/sources/${fakeCardId}`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Customer with id ${fakeInvalidCustomerId} not found.`,
                },
            });

            await expect(customer.revoke(fakeInvalidCustomerId, fakeCardId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Customer with id ${fakeInvalidCustomerId} not found."}}`,
            });
        });
    });
});
