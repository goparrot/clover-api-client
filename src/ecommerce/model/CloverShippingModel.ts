import { Type } from 'class-transformer';
import type { ICloverShipping } from '../interface';
import { CloverAddressModel } from './CloverAddressModel';

export class CloverShippingModel implements ICloverShipping {
    @Type(() => CloverAddressModel)
    address: CloverAddressModel;
    carrier?: string;
    name?: string;
    phone?: string;
    tracking_number: string;
}
