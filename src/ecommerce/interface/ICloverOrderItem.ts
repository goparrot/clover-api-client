import type { CloverOrderItemTypeEnum } from '../enum';
import type { ICloverOrderTaxRate } from './ICloverOrderTaxRate';

export interface ICloverOrderItem {
    /**
     * Total amount for the items in the smallest monetary unit of the merchant's currency.
     */
    amount: number;
    /**
     * Three-letter ISO 4217 currency code (in lowercase).
     */
    currency?: string;
    /**
     * User-facing description of the item (for example, water bottle or candy).
     * This can also describe non-SKU items such as taxes or shipping methods.
     */
    description?: string;
    /**
     * If the type is sku, the number of instances of parent for the line item.
     */
    quantity?: number;
    /**
     * Line item type.
     */
    type?: CloverOrderItemTypeEnum;
    parent: string;
    tax_rates?: ICloverOrderTaxRate[];
    amount_refunded?: number;
}
