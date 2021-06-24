import type { CloverBillPayIndicatorEnum } from '../enum';
import type { ICloverInstallmentInfo } from '../interface';

export class CloverInstallmentInfoModel implements ICloverInstallmentInfo {
    bill_pay_indicator: CloverBillPayIndicatorEnum;
    description: string;
    invoice_number: string;
}
