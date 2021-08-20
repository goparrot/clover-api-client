import type { ICloverApiOwner } from './ICloverApiOwner';
import type { ICloverApiDefaultPaymentProcessor } from './ICloverApiDefaultPaymentProcessor';
import type { ICloverApiDefaultProcessorKey } from './ICloverApiDefaultProcessorKey';
import type { ICloverApiParentReseller } from './ICloverApiParentReseller';

export interface ICloverApiReseller {
    href?: string;
    id: string;
    name?: string;
    owner?: ICloverApiOwner;
    defaultPaymentProcessor?: ICloverApiDefaultPaymentProcessor;
    defaultProcessorKey?: ICloverApiDefaultProcessorKey;
    supportsNakedCredit?: boolean;
    supportsOutboundBoarding?: boolean;
    enforceMerchantPlan?: boolean;
    supportPhone?: string;
    supportEmail?: string;
    filterApps?: boolean;
    forcePhone?: boolean;
    stationsOnClassic?: boolean;
    allowBlackhole?: boolean;
    createdTime?: number;
    parentReseller?: ICloverApiParentReseller;
    isBulkPurchaser?: false;
    isRkiIdentifier?: false;
    isNewBilling?: true;
    isSelfBoarding?: false;
    isIntercomEnabled?: true;
    locale?: string;
    feedbackDisabled?: false;
    isRapidDepositEnabled?: false;
    isCodelessActivation?: false;
    type?: string;
    source?: string;
}
