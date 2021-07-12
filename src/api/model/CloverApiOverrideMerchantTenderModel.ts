import type { ICloverApiOverrideMerchantTender } from '../interface';

export class CloverApiOverrideMerchantTenderModel implements ICloverApiOverrideMerchantTender {
    id?: string;
    editable?: string;
    labelKey?: string;
    label?: string;
    opensCashDrawer?: boolean;
    supportsTipping?: boolean;
    enabled?: boolean;
    visible?: boolean;
    instructions?: string;
}
