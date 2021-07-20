import type { ICloverInventoryCategory } from './ICloverInventoryCategory';
import type { ICloverInventoryItem } from './ICloverInventoryItem';
import type { ICloverInventoryModifier } from './ICloverInventoryModifier';
import type { ICloverInventoryModifierGroup } from './ICloverInventoryModifierGroup';
import type { ICloverInventoryTaxRate } from './ICloverInventoryTaxRate';

export interface ICloverInventoryListRes<
    T extends
        | Partial<ICloverInventoryCategory>
        | Partial<ICloverInventoryItem>
        | Partial<ICloverInventoryModifier>
        | Partial<ICloverInventoryModifierGroup>
        | Partial<ICloverInventoryTaxRate>,
> {
    elements: T[];
}
