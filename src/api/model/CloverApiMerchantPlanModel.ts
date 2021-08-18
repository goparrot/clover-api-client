import { Type } from 'class-transformer';
import type { ICloverApiMerchantPlan } from '../interface';
import { CloverApiAppBundleModel } from './CloverApiAppBundleModel';
import { CloverApiMerchantPlanGroupModel } from './CloverApiMerchantPlanGroupModel';

export class CloverApiMerchantPlanModel implements ICloverApiMerchantPlan {
    @Type(() => CloverApiAppBundleModel)
    appBundle?: CloverApiAppBundleModel;

    billToMid?: boolean;
    createdTime?: number;
    description?: string;
    enforced?: boolean;
    hidden?: boolean;
    id: string;

    @Type(() => CloverApiMerchantPlanGroupModel)
    merchantPlanGroup?: CloverApiMerchantPlanGroupModel;

    modifiedTime?: number;
    name?: string;
    planCode?: string;
    type?: string;
}
