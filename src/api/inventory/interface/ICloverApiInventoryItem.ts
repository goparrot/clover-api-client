import type { CloverApiInventoryItemPriceTypeEnum } from '../enum';
import type { ICloverApiInventoryModifierGroup } from './ICloverApiInventoryModifierGroup';
import type { ICloverApiInventoryCategory } from './ICloverApiInventoryCategory';
import type { ICloverApiInventoryAbstractItem } from './ICloverApiInventoryAbstractItem';
import type { ICloverApiInventoryTaxRate } from './ICloverApiInventoryTaxRate';
import type { ICloverApiInventoryItemStock } from './ICloverApiInventoryItemStock';
import type { ICloverApiInventoryListRes } from './ICloverApiInventoryListRes';

export interface ICloverApiInventoryItem extends ICloverApiInventoryAbstractItem {
    /** True if this item is available for sale across all channels */
    available: boolean;
    /** True if this item is hidden from Clover Register App */
    hidden: boolean;
    /** Price of the item, typically in cents; use priceType and merchant currency to determine actual item price.
     * For non-VAT merchants, this field is exclusive of tax.
     * For VAT merchants, this field is inclusive of tax.
     */
    price: number;
    priceType: CloverApiInventoryItemPriceTypeEnum;
    /** Flag to indicate whether or not to use default tax rates */
    defaultTaxRates: boolean;
    /** Cost of the item to merchant, as opposed to customer price */
    cost: number;
    /** True if this item should be counted as revenue.
     * For example, gift cards and donations would not be counted as revenue.
     */
    isRevenue: boolean;
    /** Deprecated, use itemStock instead. */
    stockCount: number;
    /** Last modified time of the inventory item */
    modifiedTime: number;
    /** Alternative name of the item */
    alternateName?: string;
    /** False manually manage item availability, True item availability depends on stock count */
    autoManage: boolean;
    /** Product code, e.g. UPC or EAN */
    code?: string;
    /** SKU of the item */
    sku?: string;
    /** Unit name, e.g. oz, lb */
    unitName?: string;
    /** List of all modifier groups linked to current item.
     * Will be returned if will be requested using param **expand** equal to **modifierGroups**
     */
    modifierGroups?: ICloverApiInventoryListRes<ICloverApiInventoryModifierGroup>;
    /** List of all categories item is linked to.
     * Will be returned if will be requested using param **expand** equal to **categories**
     */
    categories?: ICloverApiInventoryListRes<ICloverApiInventoryCategory>;
    /** List of all taxRates item is linked to.
     * Will be returned if will be requested using param **expand** equal to **taxRates**
     */
    taxRates?: ICloverApiInventoryListRes<ICloverApiInventoryTaxRate>;
    /**
     * Include information about item stock
     * Will be returned if will be requested using param **expand** equal to **itemStock**
     */
    itemStock?: ICloverApiInventoryItemStock;
}
