import type { ICloverApiRole } from '../interface';

export class CloverApiRoleModel implements ICloverApiRole {
    href: string;
    id: string;
    name: string;
    systemRole: string;
}
