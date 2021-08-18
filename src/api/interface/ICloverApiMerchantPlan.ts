import type { ICloverApiMerchantPlanGroup } from './ICloverApiMerchantPlanGroup';
import type { ICloverApiAppBundle } from './ICloverApiAppBundle';

export interface ICloverApiMerchantPlan {
    id: string;
    name?: string;
    description?: string;
    appBundle?: ICloverApiAppBundle;
    billToMid?: boolean;
    type?: string;
    planCode?: string;
    merchantPlanGroup?: ICloverApiMerchantPlanGroup;
    enforced?: boolean;
    hidden?: boolean;
    createdTime?: number;
    modifiedTime?: number;
}
