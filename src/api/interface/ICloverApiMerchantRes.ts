import type { ICloverApiOwner } from './ICloverApiOwner';
import type { ICloverApiAddress } from './ICloverApiAddress';
import type { ICloverApiMerchantPlan } from './ICloverApiMerchantPlan';
import type { ICloverApiGateway } from './ICloverApiGateway';
import type { ICloverApiMerchantShift } from './ICloverApiMerchantShift';
import type { ICloverApiMerchantOrder } from './ICloverApiMerchantOrder';
import type { ICloverApiMerchantPayment } from './ICloverApiMerchantPayment';
import type { ICloverApiMerchantTender } from './ICloverApiMerchantTender';
import type { ICloverApiMerchantPrinter } from './ICloverApiMerchantPrinter';
import type { ICloverApiMerchantOrderType } from './ICloverApiMerchantOrderType';
import type { ICloverApiReseller } from './ICloverApiReseller';
import type { ICloverApiMerchantTaxRate } from './ICloverApiMerchantTaxRate';
import type { ICloverApiMerchantModifierGroup } from './ICloverApiMerchantModifierGroup';
import type { ICloverApiMerchantOpenHour } from './ICloverApiMerchantOpenHour';
import type { ICloverApiBillingInfo } from './ICloverApiBillingInfo';

export interface ICloverApiMerchantRes {
    href: string;
    id: string;
    name: string;
    owner: ICloverApiOwner;
    address: ICloverApiAddress;
    merchantPlan: ICloverApiMerchantPlan;
    createdTime: number;
    gateway: Partial<ICloverApiGateway>;
    tenders: ICloverApiMerchantTender;
    shifts: ICloverApiMerchantShift;
    orders: ICloverApiMerchantOrder;
    payments: ICloverApiMerchantPayment;
    taxRates: ICloverApiMerchantTaxRate;
    printers: ICloverApiMerchantPrinter;
    modifierGroups: ICloverApiMerchantModifierGroup;
    orderTypes: ICloverApiMerchantOrderType;
    reseller: ICloverApiReseller;
    opening_hours: ICloverApiMerchantOpenHour;
    billingInfo?: ICloverApiBillingInfo;
    isBillable?: boolean;
}
