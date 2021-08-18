import type { ICloverApiRole } from './ICloverApiRole';

export interface ICloverApiOverrideEmployee {
    id: string;
    name: string;
    nickname: string;
    customId: string;
    email: string;
    inviteSent: boolean;
    claimedTime: number;
    deletedTime: number;
    pin: string;
    unhashedPin: string;
    role: string;
    roles: ICloverApiRole;
}
