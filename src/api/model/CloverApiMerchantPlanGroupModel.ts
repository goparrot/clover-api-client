import type { ICloverApiMerchantPlanGroup } from '../interface';

export class CloverApiMerchantPlanGroupModel implements ICloverApiMerchantPlanGroup {
    createdTime: number;
    enforceAssignment: boolean;
    id: string;
    linkable: boolean;
    modifiedTime: number;
    name: string;
}
