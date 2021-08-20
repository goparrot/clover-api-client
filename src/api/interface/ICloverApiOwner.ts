import type { ICloverApiOwnerOrder } from './ICloverApiOwnerOrder';

export interface ICloverApiOwner {
    href: string;
    id: string;
    name?: string;
    email?: string;
    inviteSent?: boolean;
    claimedTime?: number;
    role?: string;
    isOwner?: boolean;
    orders: ICloverApiOwnerOrder;
}
