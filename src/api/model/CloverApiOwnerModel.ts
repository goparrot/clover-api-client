import { Type } from 'class-transformer';
import type { ICloverApiOwner } from '../interface';
import { CloverApiOwnerOrderModel } from './CloverApiOwnerOrderModel';

export class CloverApiOwnerModel implements ICloverApiOwner {
    claimedTime?: number;
    email?: string;
    href: string;
    id: string;
    inviteSent?: boolean;
    isOwner?: boolean;
    name?: string;

    @Type(() => CloverApiOwnerOrderModel)
    orders: CloverApiOwnerOrderModel;

    role?: string;
}
