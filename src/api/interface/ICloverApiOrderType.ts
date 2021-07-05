import type { ICloverApiHour } from './ICloverApiHour';
import type { ICloverApiItemCategory } from './ICloverApiItemCategory';

export interface ICloverApiOrderType {
    /* Unique identifier. */
    id?: string;
    /* Label Key. */
    labelKey?: string;
    label?: string;
    /* If this order type is taxable. */
    taxable?: boolean;
    /* If this order type is the default. */
    isDefault?: boolean;
    /**
     * If set to false, then this order type includes all of the merchant's categories.
     * Otherwise, it only contains the categories defined in the "categories" field on this object.
     */
    filterCategories?: boolean;
    /* If this order type is hidden on the register. */
    isHidden?: boolean;
    /* The price of a fee added to this order type, not fully implemented at this time. */
    fee?: boolean;
    /* The minimum amount required for an order to be placed. */
    minOrderAmount?: number;
    /* The maximum amount for an order allowed. */
    maxOrderAmount?: number;
    /* The maximum radius allowed for an order (i.e. delivery). */
    maxRadius?: number;
    /* The average time it takes to complete the order.*/
    avgOrderTime?: number;
    hoursAvailable?: string;
    customerIdMethod?: string;
    isDeleted?: boolean;
    systemOrderTypeId?: string;
    hours?: ICloverApiHour;
    /* The categories of items that can be assigned to this order type.*/
    categories?: ICloverApiItemCategory[];
}
