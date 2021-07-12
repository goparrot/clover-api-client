import type { ICloverApiDefaultServiceCharge } from '../interface';

export class CloverApiDefaultServiceChargeModel implements ICloverApiDefaultServiceCharge {
    enabled: boolean;
    id: string;
    name: string;
    /**
     * @deprecated
     * @see percentageDecimal
     */
    percentage: number;
    percentageDecimal: number;
}
