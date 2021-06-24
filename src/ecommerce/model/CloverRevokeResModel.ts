import type { ICloverRevokeRes } from '../interface';

export class CloverRevokeResModel implements ICloverRevokeRes {
    deleted: boolean;
    id: string;
    object: string;
}
