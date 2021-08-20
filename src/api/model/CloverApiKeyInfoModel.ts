import type { ICloverApiKeyInfo } from '../interface';

export class CloverApiKeyInfoModel implements ICloverApiKeyInfo {
    id: string;
    key: string;
    pem: string;
    signature: string;
}
