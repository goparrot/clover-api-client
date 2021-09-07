import type { ICloverApiInventoryCategory } from './ICloverApiInventoryCategory';
import type { ICloverApiInventoryItem } from './ICloverApiInventoryItem';
import type { ICloverApiInventoryModifier } from './ICloverApiInventoryModifier';
import type { ICloverApiInventoryModifierGroup } from './ICloverApiInventoryModifierGroup';
import type { ICloverApiInventoryTaxRate } from './ICloverApiInventoryTaxRate';

export interface ICloverApiInventoryListRes<
    T extends
        | Partial<ICloverApiInventoryCategory>
        | Partial<ICloverApiInventoryItem>
        | Partial<ICloverApiInventoryModifier>
        | Partial<ICloverApiInventoryModifierGroup>
        | Partial<ICloverApiInventoryTaxRate>,
> {
    elements: T[];
}
