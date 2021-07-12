import type { ICloverApiDiscount } from './ICloverApiDiscount';
import type { ICloverApiApprover } from './ICloverApiApprover';

export interface ICloverApiOrderLevelDiscount {
    /* Unique identifier. */
    id?: string;
    /* If this item is based on a standard discount, this will point to the appropriate inventory.Discount. */
    discount?: Pick<ICloverApiDiscount, 'id'>;
    approver?: ICloverApiApprover;
    /* Name of the discount. */
    name?: string;
    /* Discount amount in fraction of currency unit (e.g. cents) based on currency fraction digits supported */
    amount?: number;
    /* Discount amount in percent. */
    percentage?: number;
}
