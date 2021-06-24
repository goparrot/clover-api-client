import type { CloverOrderItemTypeEnum } from '../enum';
import type { ICloverOrderItem } from './ICloverOrderItem';

export interface ICloverReturnOrderItem extends ICloverOrderItem {
    type: CloverOrderItemTypeEnum;
}
