import type { ICloverApiKeyRes } from '../interface';

export class CloverApiKeyResModel implements ICloverApiKeyRes {
    apiAccessKey: string;
    merchantUuid: string;
    developerAppUuid: string;
    active: boolean;
    createdTime: number;
    modifiedTime: number;
}
