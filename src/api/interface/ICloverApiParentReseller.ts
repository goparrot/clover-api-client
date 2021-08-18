import type { ICloverApiOwner } from './ICloverApiOwner';
import type { ICloverApiDefaultPaymentProcessor } from './ICloverApiDefaultPaymentProcessor';
import type { ICloverApiDefaultProcessorKey } from './ICloverApiDefaultProcessorKey';

export interface ICloverApiParentReseller {
    href: string;
    id: string;
    name: string;
    owner: ICloverApiOwner;
    defaultPaymentProcessor: ICloverApiDefaultPaymentProcessor;
    defaultProcessorKey: ICloverApiDefaultProcessorKey;
    supportsNakedCredit: boolean;
    supportsOutboundBoarding: boolean;
    enforceMerchantPlan: boolean;
    supportPhone: string;
    supportEmail: string;
    filterApps: boolean;
    forcePhone: boolean;
    stationsOnClassic: boolean;
    allowBlackhole: boolean;
    createdTime: number;
    isBulkPurchaser: boolean;
    isRkiIdentifier: boolean;
    isNewBilling: boolean;
    isSelfBoarding: boolean;
    isIntercomEnabled: boolean;
    feedbackDisabled: boolean;
    isRapidDepositEnabled: boolean;
    isCodelessActivation: boolean;
    type: string;
    source: string;
}
