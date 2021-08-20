import { Type } from 'class-transformer';
import type { ICloverApiParentReseller } from '../interface';
import { CloverApiDefaultPaymentProcessorModel } from './CloverApiDefaultPaymentProcessorModel';
import { CloverApiOwnerModel } from './CloverApiOwnerModel';

export class CloverApiParentResellerModel implements ICloverApiParentReseller {
    allowBlackhole: boolean;
    createdTime: number;

    @Type(() => CloverApiDefaultPaymentProcessorModel)
    defaultPaymentProcessor: CloverApiDefaultPaymentProcessorModel;

    @Type(() => CloverApiDefaultPaymentProcessorModel)
    defaultProcessorKey: CloverApiDefaultPaymentProcessorModel;

    enforceMerchantPlan: boolean;
    feedbackDisabled: boolean;
    filterApps: boolean;
    forcePhone: boolean;
    href: string;
    id: string;
    isBulkPurchaser: boolean;
    isCodelessActivation: boolean;
    isIntercomEnabled: true;
    isNewBilling: boolean;
    isRapidDepositEnabled: boolean;
    isRkiIdentifier: boolean;
    isSelfBoarding: boolean;
    name: string;

    @Type(() => CloverApiOwnerModel)
    owner: CloverApiOwnerModel;

    source: string;
    stationsOnClassic: boolean;
    supportEmail: string;
    supportPhone: string;
    supportsNakedCredit: boolean;
    supportsOutboundBoarding: boolean;
    type: string;
}
