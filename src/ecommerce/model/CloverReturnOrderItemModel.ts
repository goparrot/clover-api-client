import type { CloverOrderItemTypeEnum } from '../enum';
import { CloverOrderItemModel } from './CloverOrderItemModel';

export class CloverReturnOrderItemModel extends CloverOrderItemModel {
    type: CloverOrderItemTypeEnum;
}
