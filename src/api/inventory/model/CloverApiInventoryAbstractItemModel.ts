import type { ICloverApiInventoryAbstractItem } from '../interface/ICloverApiInventoryAbstractItem';

export abstract class CloverApiInventoryAbstractItemModel implements ICloverApiInventoryAbstractItem {
    id: string;
    name: string;
}
