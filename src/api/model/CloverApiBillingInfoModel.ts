import type { ICloverApiBillingInfo } from '../interface';

export class CloverApiBillingInfoModel implements ICloverApiBillingInfo {
    appBillable: boolean;
    planBillable: boolean;
    wmBillable: boolean;
}
