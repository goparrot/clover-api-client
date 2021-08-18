import { Type } from 'class-transformer';
import type { ICloverApiIncludedElementApp } from '../interface';
import type { CloverApiAggregateRatingModel } from './CloverApiAggregateRatingModel';
import { CloverApiDeveloperModel } from './CloverApiDeveloperModel';
import { CloverApiPermissionModel } from './CloverApiPermissionModel';

export class CloverApiIncludedElementAppModel implements ICloverApiIncludedElementApp {
    aggregateRating: CloverApiAggregateRatingModel;
    allowUninstall: boolean;
    androidVersion: Record<any, unknown>;
    approvalStatus: string;
    approvalStatusModifiedTime: number;
    billingStartTime: number;
    charge: boolean;
    createdTime: number;
    defaultResponseType: string;
    description: string;

    @Type(() => CloverApiDeveloperModel)
    developer: CloverApiDeveloperModel;

    distribution: string;
    editorPick: boolean;
    eula: string;
    filenameIcon: string;
    filenameIconLarge: string;
    filenameIconSmall: string;
    firstApprovalTime: number;
    firstPublishedTime: number;
    firstSubmittedTime: number;
    hidden: boolean;
    id: string;
    installCount: number;
    name: string;
    nonCloverBilling: boolean;
    packageName: string;
    paidAppHasTrial: boolean;
    permissionCustomersAddressRead: boolean;
    permissionCustomersAddressWrite: boolean;
    permissionCustomersBirthdateRead: boolean;
    permissionCustomersBirthdateWrite: boolean;
    permissionCustomersBusinessnameRead: boolean;
    permissionCustomersBusinessnameWrite: boolean;
    permissionCustomersCardRead: boolean;
    permissionCustomersCardWrite: boolean;
    permissionCustomersEmailRead: boolean;
    permissionCustomersEmailWrite: boolean;
    permissionCustomersMarketingRead: boolean;
    permissionCustomersMarketingWrite: boolean;
    permissionCustomersNoteRead: boolean;
    permissionCustomersNoteWrite: boolean;
    permissionCustomersPhoneRead: boolean;
    permissionCustomersPhoneWrite: boolean;
    permissionCustomersRead: boolean;
    permissionCustomersWrite: boolean;
    permissionEmployeesRead: boolean;
    permissionEmployeesWrite: boolean;
    permissionInventoryRead: boolean;
    permissionInventoryWrite: boolean;
    permissionMerchantRead: boolean;
    permissionMerchantWrite: boolean;
    permissionMidRead: boolean;
    permissionOrdersRead: boolean;
    permissionOrdersWrite: boolean;
    permissionPaymentsRead: boolean;
    permissionPaymentsWrite: boolean;
    permissionProcessCards: boolean;

    @Type(() => CloverApiPermissionModel)
    permissions: CloverApiPermissionModel;

    popularity: number;
    privacyPolicy: string;
    published: boolean;
    sortOrder: number;
    systemApp: boolean;
    tagline: string;
    trialDays: number;
}
