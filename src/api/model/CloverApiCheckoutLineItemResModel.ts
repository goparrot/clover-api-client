import { Type } from 'class-transformer';
import type { ICloverApiCheckoutLineItemRes } from '../interface';
import { CloverApiDiscountElementModel } from './CloverApiDiscountElementModel';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';
import { CloverApiModificationElementModel } from './CloverApiModificationElementModel';
import { CloverApiTaxRateElementModel } from './CloverApiTaxRateElementModel';

export class CloverApiCheckoutLineItemResModel implements ICloverApiCheckoutLineItemRes {
    @Type(() => CloverApiDiscountElementModel)
    discounts: CloverApiDiscountElementModel;

    exchanged: boolean;
    isRevenue: boolean;

    @Type(() => CloverApiItemReferenceModel)
    item: CloverApiItemReferenceModel;

    @Type(() => CloverApiModificationElementModel)
    modifications: CloverApiModificationElementModel;

    name: string;
    price: number;
    refunded: boolean;

    @Type(() => CloverApiTaxRateElementModel)
    taxRates: CloverApiTaxRateElementModel;
}
