import { Type } from 'class-transformer';
import type { ICloverApiMerchantRes } from '../interface';
import { CloverApiAddressModel } from './CloverApiAddressModel';
import { CloverApiBillingInfoModel } from './CloverApiBillingInfoModel';
import { CloverApiGatewayModel } from './CloverApiGatewayModel';
import { CloverApiMerchantPlanModel } from './CloverApiMerchantPlanModel';
import { CloverApiMerchantModifierGroupModel } from './CloverApiMerchantModifierGroupModel';
import { CloverApiMerchantOpenHourModel } from './CloverApiMerchantOpenHourModel';
import { CloverApiMerchantOrderTypeModel } from './CloverApiMerchantOrderTypeModel';
import { CloverApiOwnerModel } from './CloverApiOwnerModel';
import { CloverApiMerchantPaymentModel } from './CloverApiMerchantPaymentModel';
import { CloverApiMerchantPrinterModel } from './CloverApiMerchantPrinterModel';
import { CloverApiDefaultProcessorKeyModel } from './CloverApiDefaultProcessorKeyModel';
import { CloverApiMerchantShiftModel } from './CloverApiMerchantShiftModel';
import { CloverApiMerchantTaxRateModel } from './CloverApiMerchantTaxRateModel';
import { CloverApiMerchantTenderModel } from './CloverApiMerchantTenderModel';
import { CloverApiMerchantOrderModel } from './CloverApiMerchantOrderModel';

export class CloverApiMerchantResModel implements ICloverApiMerchantRes {
    @Type(() => CloverApiAddressModel)
    address: CloverApiAddressModel;

    @Type(() => CloverApiBillingInfoModel)
    billingInfo?: CloverApiBillingInfoModel;

    createdTime: number;

    @Type(() => CloverApiGatewayModel)
    gateway: CloverApiGatewayModel;

    href: string;
    id: string;
    isBillable?: boolean;

    @Type(() => CloverApiMerchantPlanModel)
    merchantPlan: CloverApiMerchantPlanModel;

    @Type(() => CloverApiMerchantModifierGroupModel)
    modifierGroups: CloverApiMerchantModifierGroupModel;

    name: string;
    @Type(() => CloverApiMerchantOpenHourModel)
    opening_hours: CloverApiMerchantOpenHourModel;

    @Type(() => CloverApiMerchantOrderTypeModel)
    orderTypes: CloverApiMerchantOrderTypeModel;

    @Type(() => CloverApiMerchantOrderModel)
    orders: CloverApiMerchantOrderModel;

    @Type(() => CloverApiOwnerModel)
    owner: CloverApiOwnerModel;

    @Type(() => CloverApiMerchantPaymentModel)
    payments: CloverApiMerchantPaymentModel;

    @Type(() => CloverApiMerchantPrinterModel)
    printers: CloverApiMerchantPrinterModel;

    @Type(() => CloverApiDefaultProcessorKeyModel)
    reseller: CloverApiDefaultProcessorKeyModel;

    @Type(() => CloverApiMerchantShiftModel)
    shifts: CloverApiMerchantShiftModel;

    @Type(() => CloverApiMerchantTaxRateModel)
    taxRates: CloverApiMerchantTaxRateModel;

    @Type(() => CloverApiMerchantTenderModel)
    tenders: CloverApiMerchantTenderModel;
}
