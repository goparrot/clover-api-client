import type { ICloverInventoryItem } from './ICloverInventoryItem';
import type { ICloverInventoryAbstractItem } from './ICloverInventoryAbstractItem';
import type { ICloverInventoryListRes } from './ICloverInventoryListRes';

export interface ICloverInventoryCategory extends ICloverInventoryAbstractItem {
    /** Integer used to determine how this category is sorted against other categories. */
    sortOrder: number;
    /** Ordered list of items associated with this category. */
    items?: ICloverInventoryListRes<ICloverInventoryItem>;
    /** Whether the category has been deleted. */
    deleted?: boolean;
    /** The time this category was last modified */
    modifiedTime?: number;
    /** Reference to canonical category */
    canonical?: { id: string };
}
