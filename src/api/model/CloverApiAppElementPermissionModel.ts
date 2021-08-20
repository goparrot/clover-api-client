import { Type } from 'class-transformer';
import type { ICloverApiAppElementPermission } from '../interface';
import { CloverApiAppPermissionModel } from './CloverApiAppPermissionModel';

export class CloverApiAppElementPermissionModel implements ICloverApiAppElementPermission {
    @Type(() => CloverApiAppPermissionModel)
    appPermission: CloverApiAppPermissionModel;

    required: boolean;
}
