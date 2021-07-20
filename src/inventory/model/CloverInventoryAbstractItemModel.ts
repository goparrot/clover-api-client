import type { ICloverInventoryAbstractItem } from '../interface/ICloverInventoryAbstractItem';

export abstract class CloverInventoryAbstractItemModel implements ICloverInventoryAbstractItem {
    id: string;
    name: string;
}
