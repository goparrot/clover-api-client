import MockAdapter from 'axios-mock-adapter';
import { CloverChargeModel, CloverCharge, CloverChargeResModel } from '../../../../src/ecommerce';
import type { ICloverSource, ICloverChargeReq } from '../../../../src/ecommerce';
import { CloverAxiosException } from '../../../../src';

describe('CloverCharge (unit)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeChargeId: string = 'fakeChargeId';
    const fakeInvalidChargeId: string = 'fakeInvalidChargeId';
    const cloverChargeSource: ICloverSource = {
        id: 'clv_1TSTSi5bfaHyYDSpx7bJK2Xm',
        brand: 'VISA',
        first6: '424242',
        last4: '4242',
    };
    const cloverChargeResModel: CloverChargeResModel = {
        id: '8CCA17W869QWY',
        amount: 100,
        amount_refunded: 0,
        currency: 'usd',
        created: 1620732353402,
        captured: false,
        ref_num: '113100501880',
        auth_code: 'OK4469',
        outcome: {
            network_status: 'approved_by_network',
            type: 'authorized',
        },
        paid: true,
        status: 'succeeded',
        source: {
            ...cloverChargeSource,
            exp_month: '12',
            exp_year: '2022',
        },
    };
    const cloverChargeModel: CloverChargeModel = {
        ...cloverChargeResModel,
        order: '95XZEH8240VM0',
        source: cloverChargeSource,
    };
    const fakeAccessToken: string = 'fakeAccessToken';

    let charge: CloverCharge;
    let mock: MockAdapter;

    beforeEach(() => {
        charge = new CloverCharge({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(charge.client);
    });

    describe('#create', () => {
        it('should return plain to class data ("capture": false)', async () => {
            const cloverChargeReq: ICloverChargeReq = {
                source: 'clv_2TSTE8kqAc46ct2fzQuaTGN5',
                amount: 100,
                currency: 'usd',
                capture: false,
                idempotencyKey: '7467cb48-43e9-4024-af5f-8be7781df17b',
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(200, cloverChargeResModel);
            const data: CloverChargeResModel = await charge.create(cloverChargeReq);

            expect(data).toBeInstanceOf(CloverChargeResModel);
            expect(data).toEqual(cloverChargeResModel);
        });

        it('should return plain to class data ("capture": true)', async () => {
            const cloverChargeReq: ICloverChargeReq = {
                source: 'clv_2TSTE8kqAc46ct2fzQuaTGN5',
                amount: 100,
                currency: 'usd',
                capture: true,
                idempotencyKey: '79879fea-49ed-4f0c-91ae-3a1030927b52',
            };
            const fakeCloverChargeResModel: CloverChargeResModel = {
                ...cloverChargeResModel,
                captured: true,
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(200, fakeCloverChargeResModel);
            const data: CloverChargeResModel = await charge.create(cloverChargeReq);

            expect(data).toBeInstanceOf(CloverChargeResModel);
            expect(data).toEqual(fakeCloverChargeResModel);
        });

        it('should throw error (invalid_charge_amount)', async () => {
            // @ts-expect-error
            const cloverChargeReq: ICloverChargeReq = {
                source: 'clv_2TSTE8kqAc46ct2fzQuaTGN5',
                currency: 'usd',
                capture: true,
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_charge_amount',
                    message: 'Please provide a valid amount.',
                },
            });

            await expect(charge.create(cloverChargeReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400,' +
                    ' Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_charge_amount","message":"Please provide a valid amount."}}',
            });
        });

        it('should throw error (invalid_request) provide a valid currency', async () => {
            // @ts-expect-error
            const cloverChargeReq: ICloverChargeReq = {
                source: 'clv_2TSTE8kqAc46ct2fzQuaTGN5',
                capture: true,
                amount: 100,
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Please provide a valid currency.',
                },
            });

            await expect(charge.create(cloverChargeReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, ' +
                    'Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_request","message":"Please provide a valid currency."}}',
            });
        });

        it('should throw error (invalid_request) provide a valid source', async () => {
            // @ts-expect-error
            const cloverChargeReq: ICloverChargeReq = {
                capture: true,
                currency: 'usd',
                amount: 100,
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Please provide a valid source for the charge.',
                },
            });

            await expect(charge.create(cloverChargeReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, ' +
                    'Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_request","message":"Please provide a valid source for the charge."}}',
            });
        });

        it('should throw error (token_already_used)', async () => {
            const cloverChargeReq: ICloverChargeReq = {
                source: 'clv_2RSRT2UYsYNaLQ3xbfJgbPsW',
                capture: true,
                currency: 'usd',
                amount: 100,
                idempotencyKey: 'aea547f9-e1ee-4721-b742-303b887d1d65',
            };
            mock.onPost('/v1/charges', cloverChargeReq).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'token_already_used',
                    message: 'You cannot use a clover token more than once unless it is marked as multipay.',
                },
            });

            await expect(charge.create(cloverChargeReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, ' +
                    'Response: {"message":"400 Bad Request","error":{"code":"token_already_used","message":"You cannot use a clover token more than once unless it is marked as multipay."}}',
            });
        });
    });

    describe('#capture', () => {
        it('should return plain to class data', async () => {
            const cloverCaptureResModel: CloverChargeModel = {
                id: 'Y0DQE85KG1HHA',
                amount: 100,
                currency: 'usd',
                created: 1620723713000,
                captured: true,
                order: 'HVJ36HN6CYFD0',
                outcome: {
                    network_status: 'approved_by_network',
                    type: 'authorized',
                },
                paid: true,
                status: 'succeeded',
                source: {
                    id: 'clv_1TSTSbVgcPBUze59r4WhxbAC',
                    brand: 'VISA',
                    first6: '424242',
                    last4: '4242',
                },
            };
            mock.onPost(`/v1/charges/${fakeChargeId}/capture`).reply(200, cloverCaptureResModel);
            const data: CloverChargeModel = await charge.capture(fakeChargeId);

            expect(data).toBeInstanceOf(CloverChargeModel);
            expect(data).toEqual(cloverCaptureResModel);
        });

        it('should throw error (processing_error) cannot capture a non AUTH payment', async () => {
            mock.onPost(`/v1/charges/${fakeInvalidChargeId}/capture`).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'processing_error',
                    message: 'Invalid request: cannot capture a non AUTH payment',
                },
            });

            await expect(charge.capture(fakeInvalidChargeId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400, ' +
                    'Response: {"message":"400 Bad Request","error":{"code":"processing_error","message":"Invalid request: cannot capture a non AUTH payment"}}',
            });
        });
    });

    describe('#retrieve', () => {
        it('should return plain to class data ("capture": false)', async () => {
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(200, cloverChargeModel);
            const data: CloverChargeModel = await charge.retrieve(fakeChargeId);

            expect(data).toBeInstanceOf(CloverChargeModel);
            expect(data).toEqual(cloverChargeModel);
        });

        it('should return plain to class data ("capture": true)', async () => {
            const fakeCloverCaptureResModel: CloverChargeModel = {
                ...cloverChargeModel,
                captured: true,
            };
            mock.onGet(`/v1/charges/${fakeChargeId}`).reply(200, fakeCloverCaptureResModel);
            const data: CloverChargeModel = await charge.retrieve(fakeChargeId);

            expect(data).toBeInstanceOf(CloverChargeModel);
            expect(data).toEqual(fakeCloverCaptureResModel);
        });

        it('should throw error (invalid_request) charge not found', async () => {
            mock.onGet(`/v1/charges/${fakeInvalidChargeId}`).reply(400, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Charge with id ${fakeInvalidChargeId} not found.`,
                },
            });

            await expect(charge.retrieve(fakeInvalidChargeId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Charge with id ${fakeInvalidChargeId} not found."}}`,
            });
        });
    });

    describe('#list', () => {
        it('should return plain to class data', async () => {
            mock.onGet('/v1/charges').reply(200, [cloverChargeModel]);
            const data: CloverChargeModel[] = await charge.list();

            expect(data[0]).toBeInstanceOf(CloverChargeModel);
            expect(data).toEqual([cloverChargeModel]);
        });
    });
});
