import MockAdapter from 'axios-mock-adapter';
import { CloverApiKeyResModel, CloverApiKey } from '../../../../src/api';
import { CloverAxiosException } from '../../../../src/common';

describe('CloverApiKey (unit)', () => {
    const baseUrl: string = 'https://sandbox.dev.clover.com';
    const fakeAccessToken: string = 'fakeAccessToken';
    const fakeInvalidAccessToken: string = 'fakeInvalidAccessToken';
    const cloverApiKeyResModel: CloverApiKeyResModel = {
        apiAccessKey: '4db4db9ea5e2c9ad57a5a59ce4c7c390',
        merchantUuid: 'T76Z4HS2WS0S1',
        developerAppUuid: 'QFZXPENZYXCRM',
        active: true,
        createdTime: 1605010082000,
        modifiedTime: 1605010082000,
    };

    let cloverApiKey: CloverApiKey;
    let mock: MockAdapter;

    beforeEach(() => {
        cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeAccessToken });
        mock = new MockAdapter(cloverApiKey.client);
    });

    describe('#retrieve', () => {
        it('should return plain data', async () => {
            mock.onGet('/pakms/apikey').reply(200, cloverApiKeyResModel);
            const data: CloverApiKeyResModel = await cloverApiKey.retrieve();

            expect(cloverApiKeyResModel).toEqual(data);
            expect(data).toBeInstanceOf(CloverApiKeyResModel);
        });

        it('should throw error', async () => {
            cloverApiKey = new CloverApiKey({ baseUrl, accessToken: fakeInvalidAccessToken });
            mock.onGet('/pakms/apikey').reply(401, { message: '401 Unauthorized' });

            await expect(cloverApiKey.retrieve()).rejects.toMatchObject({
                constructor: CloverAxiosException,
                message: 'Request failed with status code 401, Response: {"message":"401 Unauthorized"}',
            });
        });
    });
});
