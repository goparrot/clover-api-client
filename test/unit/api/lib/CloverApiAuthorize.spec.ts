import MockAdapter from 'axios-mock-adapter';
import { CloverAuthResModel, CloverApiAuthorize } from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverApiAuthorize (unit)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const appId: string = 'fakeAppId';
    const appSecret: string = 'fakeAppSecret';

    let authorize: CloverApiAuthorize;
    let mock: MockAdapter;

    beforeEach(() => {
        authorize = new CloverApiAuthorize({ baseUrl });
        mock = new MockAdapter(authorize.client);
    });

    describe('#confirm', () => {
        it('should return plain to class data', async () => {
            const fakeCode: string = 'd6d8eb73-d3ca-624a-5900-1014236c8c21';
            const fakeCloverAuthResModel: CloverAuthResModel = { access_token: 'e8ab7eaa-f77d-3bc6-5a5d-d060921aabeb' };
            mock.onGet(`/oauth/token`).reply(200, fakeCloverAuthResModel);

            const data: CloverAuthResModel = await authorize.confirm(appId, appSecret, fakeCode);

            expect(fakeCloverAuthResModel).toEqual(data);
            expect(data).toBeInstanceOf(CloverAuthResModel);
        });

        it('should throw error', async () => {
            const fakeCode: string = 'd6d8eb53-c3ca-624a-5900-1014236c8c21';
            mock.onGet(`/oauth/token`).reply(400, { message: 'Invalid OAuth credentials' });

            await expect(authorize.confirm(appId, appSecret, fakeCode)).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 400, Response: {"message":"Invalid OAuth credentials"}',
            });
        });
    });
});
