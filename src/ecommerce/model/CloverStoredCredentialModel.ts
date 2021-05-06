import { Type } from 'class-transformer';
import type { ICloverStoredCredential } from '../interface';
import { CloverInstallmentInfoModel } from './CloverInstallmentInfoModel';

export class CloverStoredCredentialModel implements ICloverStoredCredential {
    cardbrand_original_amount: string;
    initiator: string;
    @Type(() => CloverInstallmentInfoModel)
    installment_info: CloverInstallmentInfoModel;
    is_scheduled: boolean;
    sequence: string;
}
