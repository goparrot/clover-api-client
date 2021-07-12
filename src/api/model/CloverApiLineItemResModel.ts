import { Type } from 'class-transformer';
import type { ICloverApiLineItemRes } from '../interface';
import { CloverApiItemReferenceModel } from './CloverApiItemReferenceModel';
import { CloverApiOrderRefModel } from './CloverApiOrderRefModel';
import { CloverApiTaxRateElementModel } from './CloverApiTaxRateElementModel';

export class CloverApiLineItemResModel implements ICloverApiLineItemRes {
    createdTime: number;
    exchanged: boolean;
    id: string;
    isRevenue: boolean;

    @Type(() => CloverApiItemReferenceModel)
    item: CloverApiItemReferenceModel;

    name: string;
    orderClientCreatedTime: number;

    @Type(() => CloverApiOrderRefModel)
    orderRef: CloverApiOrderRefModel;

    price: number;
    printed: boolean;
    refunded: boolean;

    @Type(() => CloverApiTaxRateElementModel)
    taxRates: CloverApiTaxRateElementModel;
}
