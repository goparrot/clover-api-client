import MockAdapter from 'axios-mock-adapter';
import type { ICloverPayOrderRes, ICloverReturnOrderRes } from '../../../../src/ecommerce';
import { CloverPayOrderResModel, CloverOrder, CloverReturnOrderResModel } from '../../../../src/ecommerce';
import { CloverCardBrandEnum, CloverAxiosException } from '../../../../src/common';

describe('CloverOrder (unit)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeOrderId: string = 'fakeOrderId';
    const fakeSource: string = 'fakeSource';
    const fakeInvalidSource: string = 'fakeInvalidSource';
    const cloverPayOrderRes: ICloverPayOrderRes = {
        id: 'Y758WHYNAMFPW',
        object: 'order',
        amount: 400,
        amount_paid: 400,
        amount_returned: 400,
        currency: 'USD',
        charge: 'QWC3WNJCARN2J',
        created: 1623932966000,
        ref_num: '116900503370',
        auth_code: 'OK0469',
        items: [
            {
                parent: 'V96HM2NN926JM',
                amount: 400,
                description: 'Coca cola',
                tax_rates: [
                    {
                        name: 'NO_TAX_APPLIED',
                    },
                ],
            },
        ],
        past_charges: [
            {
                id: 'SWA9SJT366ZKM',
                amount: 400,
                amount_refunded: 400,
                currency: 'usd',
                created: 1623933040000,
                captured: false,
                order: 'Y758WHYNAMFPW',
                outcome: {
                    network_status: 'approved_by_network',
                    type: 'authorized',
                },
                paid: true,
                refunded: true,
                status: 'succeeded',
                source: {
                    id: 'clv_1TSTS52fRshULiGg38BMhxNJ',
                    brand: CloverCardBrandEnum.VISA,
                    first6: '424242',
                    last4: '4242',
                },
            },
        ],
        source: {
            brand: CloverCardBrandEnum.VISA,
            exp_month: '12',
            exp_year: '2022',
            first6: '424242',
            last4: '4242',
        },
        status: 'paid',
        status_transitions: {
            paid: 1624003342266,
        },
    };

    const cloverReturnOrderRes: ICloverReturnOrderRes = {
        id: 'Y758WHYNAMFPW',
        amount: 400,
        amount_returned: 400,
        currency: 'USD',
        status: 'returned',
        status_transitions: {},
    };

    let cloverOrder: CloverOrder;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverOrder = new CloverOrder({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverOrder.client);
    });

    describe('#pay', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(200, cloverPayOrderRes);
            const res: CloverPayOrderResModel = await cloverOrder.pay(fakeOrderId, { source: fakeSource });

            expect(res).toBeInstanceOf(CloverPayOrderResModel);
            expect(res).toEqual(cloverPayOrderRes);
        });

        it('should throw error, order already paid.', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(409, {
                message: '409 Conflict',
                error: {
                    type: 'invalid_request_error',
                    code: 'order_already_paid',
                    message: `Order with id ${fakeOrderId} has been already paid.`,
                },
            });

            await expect(cloverOrder.pay(fakeOrderId, { source: fakeSource })).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 409, Response: {"message":"409 Conflict","error":{"type":"invalid_request_error","code":"order_already_paid","message":"Order with id ${fakeOrderId} has been already paid."}}`,
            });
        });

        it('should throw error, order has no line items', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: `Order with id ${fakeOrderId} has no line items`,
                },
            });

            await expect(cloverOrder.pay(fakeOrderId, { source: fakeSource })).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Order with id ${fakeOrderId} has no line items"}}`,
            });
        });

        it('should throw error, token already used', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeInvalidSource }).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'token_already_used',
                    message: 'You cannot use a clover token more than once unless it is marked as multipay.',
                },
            });

            await expect(cloverOrder.pay(fakeOrderId, { source: fakeInvalidSource })).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"code":"token_already_used","message":"You cannot use a clover token more than once unless it is marked as multipay."}}`,
            });
        });

        it('should throw error, unauthorized', async () => {
            cloverOrder = new CloverOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v1/orders/${fakeOrderId}/pay`, { source: fakeSource }).reply(401, {
                message: '401 Unauthorized',
            });

            await expect(cloverOrder.pay(fakeOrderId, { source: fakeSource })).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });
    });

    describe('#return', () => {
        it('should return plain to class data', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(200, cloverReturnOrderRes);
            const res: CloverReturnOrderResModel = await cloverOrder.return(fakeOrderId);

            expect(res).toBeInstanceOf(CloverReturnOrderResModel);
            expect(res).toEqual(cloverReturnOrderRes);
        });

        it('should throw error, unauthorized', async () => {
            cloverOrder = new CloverOrder({ baseUrl, accessToken: 'fakeInvalidAccessToken' });

            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(401, cloverReturnOrderRes);

            await expect(cloverOrder.return(fakeOrderId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 401, Response: {"message":"401 Unauthorized"}`,
            });
        });

        it('should throw error, processing error', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'processing_error',
                    message: "This refund would make the order's total refunded amount greater than the original order's amount.",
                },
            });

            await expect(cloverOrder.return(fakeOrderId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 400, Response: {"message":"400 Bad Request","error":{"code":"processing_error","message":"This refund would make the order's total refunded amount greater than the original order's amount."}}`,
            });
        });

        it('should throw error, order has no payments', async () => {
            mock.onPost(`/v1/orders/${fakeOrderId}/returns`).reply(404, {
                message: '404 Not Found',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Order has no payments. Nothing to refund',
                },
            });

            await expect(cloverOrder.return(fakeOrderId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: `Request failed with status code 404, Response: {"message":"404 Not Found","error":{"type":"invalid_request_error","code":"invalid_request","message":"Order has no payments. Nothing to refund"}}`,
            });
        });
    });
});
