import MockAdapter from 'axios-mock-adapter';
import { CloverRefundStatusEnum, CloverRefundResModel, CloverRefundListResModel, CloverRefund } from '../../../../src/ecommerce';
import type { ICloverRefundRes, ICloverRefundReq, ICloverRefundListRes } from '../../../../src/ecommerce';

import { CloverAxiosException } from '../../../../src/common/exception/CloverAxiosException';

describe('CloverRefund (unit)', () => {
    const baseUrl: string = 'https://scl-sandbox.dev.clover.com';
    const fakeRefundId: string = 'fakeRefundId';
    const fakeInvalidRefundId: string = 'fakeInvalidRefundId';
    const fakeAccessToken: string = 'fakeAccessToken';
    const cloverRefundRes: ICloverRefundRes = {
        id: '64X5EKBXSQMMA',
        object: 'refund',
        amount: 100,
        charge: '4WDHVF04KJ7ET',
        created: 1620745128520,
        status: CloverRefundStatusEnum.SUCCEEDED,
    };

    let cloverRefund: CloverRefund;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverRefund = new CloverRefund({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverRefund.client);
    });

    describe('#create', () => {
        it('should return plain data', async () => {
            const cloverRefundReq: ICloverRefundReq = {
                charge: '8CCA17W869QWY',
                amount: 100,
            };
            mock.onPost('/v1/refunds').reply(200, cloverRefundRes);
            const data: CloverRefundResModel = await cloverRefund.create(cloverRefundReq);

            expect(data).toBeInstanceOf(CloverRefundResModel);
            expect(data).toEqual(cloverRefundRes);
        });

        it('should throw error provide a valid amount', async () => {
            // @ts-expect-error
            const cloverRefundReq: ICloverRefundReq = {
                charge: '8CCA17W869QWY',
            };
            mock.onPost('/v1/refunds').reply(400, {
                message: '400 Bad Request',
                error: {
                    code: 'processing_error',
                    message: "This refund would make the order's total refunded amount greater than the original order's amount.",
                },
            });

            await expect(cloverRefund.create(cloverRefundReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400,' +
                    ' Response: {"message":"400 Bad Request","error":{"code":"processing_error","message":"This refund would make the order\'s total refunded amount greater than the original order\'s amount."}}',
            });
        });

        it('should throw error provide a valid charge', async () => {
            // @ts-expect-error
            const cloverRefundReq: ICloverRefundReq = {
                amount: 100,
            };
            mock.onPost('/v1/refunds').reply(400, {
                message: '400 Bad Request',
                error: {
                    type: 'invalid_request_error',
                    code: 'invalid_request',
                    message: 'Please provide a valid charge.',
                },
            });

            await expect(cloverRefund.create(cloverRefundReq)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message:
                    'Request failed with status code 400,' +
                    ' Response: {"message":"400 Bad Request","error":{"type":"invalid_request_error","code":"invalid_request","message":"Please provide a valid charge."}}',
            });
        });
    });

    describe('#retrieve', () => {
        it('should return plain data', async () => {
            mock.onGet(`/v1/refunds/${fakeRefundId}`).reply(200, cloverRefundRes);
            const data: CloverRefundResModel = await cloverRefund.retrieve(fakeRefundId);

            expect(data).toBeInstanceOf(CloverRefundResModel);
            expect(data).toEqual(cloverRefundRes);
        });

        it('should throw error', async () => {
            mock.onGet(`/v1/refunds/${fakeInvalidRefundId}`).reply(400, {
                message: '404 Not Found',
                error: {
                    code: 'processing_error',
                    message: 'Not Found',
                },
            });

            await expect(cloverRefund.retrieve(fakeInvalidRefundId)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 400, Response: {"message":"404 Not Found","error":{"code":"processing_error","message":"Not Found"}}',
            });
        });
    });

    describe('#list', () => {
        it('should return plain data', async () => {
            const cloverRefundListRes: ICloverRefundListRes = {
                inReportingPeriod: false,
                amount: 100,
                id: '64X5EKBXSQMMA',
                voided: false,
            };
            mock.onGet('/v1/refunds').reply(200, [cloverRefundListRes]);
            const data: CloverRefundListResModel[] = await cloverRefund.list();

            expect(data[0]).toBeInstanceOf(CloverRefundListResModel);
            expect(data).toEqual([cloverRefundListRes]);
        });
    });
});
