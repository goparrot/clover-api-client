import type { ICloverApiPermission } from '../interface';
import type { CloverApiAppElementPermissionModel } from './CloverApiAppElementPermissionModel';

export class CloverApiPermissionModel implements ICloverApiPermission {
    elements: CloverApiAppElementPermissionModel[];
}
