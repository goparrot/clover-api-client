import type { ICloverBillingDetail } from '../interface';

export class CloverBillingDetailModel implements ICloverBillingDetail {
    email: string;
    name: string;
    phone: string;
}
