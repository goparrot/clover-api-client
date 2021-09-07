import type { ICloverApiInventoryCategory } from './ICloverApiInventoryCategory';
import type { ICloverApiInventoryItem } from './ICloverApiInventoryItem';
import type { ICloverApiInventoryModifier } from './ICloverApiInventoryModifier';
import type { ICloverApiInventoryModifierGroup } from './ICloverApiInventoryModifierGroup';
import type { ICloverApiInventoryTaxRate } from './ICloverApiInventoryTaxRate';

export type ICloverApiExtendData =
    | ICloverApiInventoryCategory
    | ICloverApiInventoryItem
    | ICloverApiInventoryModifier
    | ICloverApiInventoryModifierGroup
    | ICloverApiInventoryTaxRate;
