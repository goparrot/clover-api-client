import { Type } from 'class-transformer';
import type { ICloverApiReseller } from '../interface';
import { CloverApiDefaultPaymentProcessorModel } from './CloverApiDefaultPaymentProcessorModel';
import { CloverApiDefaultProcessorKeyModel } from './CloverApiDefaultProcessorKeyModel';
import { CloverApiOwnerModel } from './CloverApiOwnerModel';
import { CloverApiParentResellerModel } from './CloverApiParentResellerModel';

export class CloverApiResellerModel implements ICloverApiReseller {
    allowBlackhole: boolean;
    createdTime: number;
    @Type(() => CloverApiDefaultPaymentProcessorModel)
    defaultPaymentProcessor: CloverApiDefaultPaymentProcessorModel;
    @Type(() => CloverApiDefaultProcessorKeyModel)
    defaultProcessorKey: CloverApiDefaultProcessorKeyModel;
    enforceMerchantPlan: boolean;
    feedbackDisabled: false;
    filterApps: boolean;
    forcePhone: boolean;
    href: string;
    id: string;
    isBulkPurchaser: false;
    isCodelessActivation: false;
    isIntercomEnabled: true;
    isNewBilling: true;
    isRapidDepositEnabled: false;
    isRkiIdentifier: false;
    isSelfBoarding: false;
    locale: string;
    name: string;
    @Type(() => CloverApiOwnerModel)
    owner: CloverApiOwnerModel;
    @Type(() => CloverApiParentResellerModel)
    parentReseller: CloverApiParentResellerModel;
    source: string;
    stationsOnClassic: boolean;
    supportEmail: string;
    supportPhone: string;
    supportsNakedCredit: boolean;
    supportsOutboundBoarding: boolean;
    type: string;
}
