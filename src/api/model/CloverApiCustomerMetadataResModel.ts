import { Type } from 'class-transformer';
import type { ICloverApiCustomerMetadataRes } from '../interface';
import { CloverApiCustomerModel } from './CloverApiCustomerModel';

export class CloverApiCustomerMetadataResModel implements ICloverApiCustomerMetadataRes {
    businessName: string;
    @Type(() => CloverApiCustomerModel)
    customer: CloverApiCustomerModel;
    dobDay: string;
    dobMonth: string;
    dobYear: string;
    modifiedTime: string;
    note: string;
}
