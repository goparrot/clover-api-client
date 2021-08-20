import { Type } from 'class-transformer';
import type { ICloverApiOverrideEmployee } from '../interface';
import { CloverApiRoleModel } from './CloverApiRoleModel';

export class CloverApiOverrideEmployeeModel implements ICloverApiOverrideEmployee {
    claimedTime: number;
    customId: string;
    deletedTime: number;
    email: string;
    id: string;
    inviteSent: boolean;
    name: string;
    nickname: string;
    pin: string;
    role: string;

    @Type(() => CloverApiRoleModel)
    roles: CloverApiRoleModel;

    unhashedPin: string;
}
