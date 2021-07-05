import { Type } from 'class-transformer';
import type { ICloverApiLineItem } from '../interface';
import { CloverApiDiscountModel } from './CloverApiDiscountModel';
import { CloverApiExchangedLineItemModel } from './CloverApiExchangedLineItemModel';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';
import { CloverApiModificationModel } from './CloverApiModificationModel';
import { CloverApiOrderLevelDiscount } from './CloverApiOrderLevelDiscount';
import { CloverApiPaymentModel } from './CloverApiPaymentModel';
import { CloverApiPrintGroupModel } from './CloverApiPrintGroupModel';
import { CloverApiRefundModel } from './CloverApiRefundModel';
import { CloverApiTagModel } from './CloverApiTagModel';
import { CloverApiTaxRateModel } from './CloverApiTaxRateModel';

export class CloverApiLineItemModel implements ICloverApiLineItem {
    alternateName?: string;
    binName?: string;
    createdTime?: number;
    discountAmount?: number;

    @Type(() => CloverApiDiscountModel)
    discounts?: CloverApiDiscountModel[];

    exchanged?: boolean;

    @Type(() => CloverApiExchangedLineItemModel)
    exchangedLineItem?: CloverApiExchangedLineItemModel;

    isRevenue?: boolean;

    @Type(() => CloverApiItemReferenceModel)
    item: CloverApiItemReferenceModel;

    itemCode?: string;

    @Type(() => CloverApiModificationModel)
    modifications?: CloverApiModificationModel[];

    name?: string;
    note?: string;
    orderClientCreatedTime?: number;
    orderLevelDiscountAmount?: number;

    @Type(() => CloverApiOrderLevelDiscount)
    orderLevelDiscounts?: CloverApiOrderLevelDiscount[];

    @Type(() => CloverApiPaymentModel)
    payments?: CloverApiPaymentModel[];

    price?: number;
    priceWithModifiers?: number;
    priceWithModifiersAndItemAndOrderDiscounts?: number;

    @Type(() => CloverApiPrintGroupModel)
    printGroup?: CloverApiPrintGroupModel;

    printed?: boolean;
    quantitySold?: number;

    @Type(() => CloverApiRefundModel)
    refund?: CloverApiRefundModel;

    refunded?: boolean;
    revenueAmount?: number;

    @Type(() => CloverApiTagModel)
    tags?: CloverApiTagModel[];

    @Type(() => CloverApiTaxRateModel)
    taxRates?: CloverApiTaxRateModel[];

    unitName?: string;
    unitQty?: number;
    userData?: string;
}
