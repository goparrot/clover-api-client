import { Type } from 'class-transformer';
import type { ICloverApiAtomicOrderRes } from '../interface';
import { CloverApiEmployeeResModel } from './CloverApiEmployeeResModel';
import { CloverApiLineItemElementModel } from './CloverApiLineItemElementModel';
import { CloverApiOrderTypeResModel } from './CloverApiOrderTypeResModel';
import { CloverApiDiscountElementModel } from './CloverApiDiscountElementModel';

export class CloverApiAtomicOrderResModel implements ICloverApiAtomicOrderRes {
    clientCreatedTime: number;
    createdTime: number;
    currency: string;

    @Type(() => CloverApiEmployeeResModel)
    employee: CloverApiEmployeeResModel;

    groupLineItems: boolean;
    href: string;
    id: string;
    isVat: boolean;

    @Type(() => CloverApiEmployeeResModel)
    lineItems: CloverApiLineItemElementModel;

    manualTransaction: boolean;
    modifiedTime: number;

    @Type(() => CloverApiOrderTypeResModel)
    orderType?: CloverApiOrderTypeResModel;

    state: string;
    taxRemoved: boolean;
    testMode: boolean;
    total: number;

    @Type(() => CloverApiDiscountElementModel)
    discounts?: CloverApiDiscountElementModel;
}
