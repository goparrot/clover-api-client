import { Type } from 'class-transformer';
import type { ICloverApiInventoryModifier } from '../interface';
import { CloverApiModifierGroupModel } from '../../model/CloverApiModifierGroupModel';
import { CloverApiInventoryAbstractItemModel } from './CloverApiInventoryAbstractItemModel';

export class CloverApiInventoryModifierModel extends CloverApiInventoryAbstractItemModel implements ICloverApiInventoryModifier {
    price: number;
    @Type(() => CloverApiModifierGroupModel)
    modifierGroup: CloverApiModifierGroupModel;
    alternateName?: string;
    available: boolean;
}
