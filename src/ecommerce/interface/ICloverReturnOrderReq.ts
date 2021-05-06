import type { ICloverReturnOrderItem } from './ICloverReturnOrderItem';

export interface ICloverReturnOrderReq {
    expand?: string[];
    items?: ICloverReturnOrderItem[];
}
