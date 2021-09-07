import type { ICloverApiInventoryItem } from './ICloverApiInventoryItem';
import type { ICloverApiInventoryAbstractItem } from './ICloverApiInventoryAbstractItem';
import type { ICloverApiInventoryListRes } from './ICloverApiInventoryListRes';

export interface ICloverApiInventoryCategory extends ICloverApiInventoryAbstractItem {
    /** Integer used to determine how this category is sorted against other categories. */
    sortOrder: number;
    /** Ordered list of items associated with this category. */
    items?: ICloverApiInventoryListRes<ICloverApiInventoryItem>;
    /** Whether the category has been deleted. */
    deleted?: boolean;
    /** The time this category was last modified */
    modifiedTime?: number;
    /** Reference to canonical category */
    canonical?: { id: string };
}
