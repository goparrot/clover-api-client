import { Type } from 'class-transformer';
import type { ICloverApiOrderTypeElementRes } from '../interface';
import { CloverApiOrderTypeResModel } from './CloverApiOrderTypeResModel';

export class CloverApiOrderTypeElementResModel implements ICloverApiOrderTypeElementRes {
    @Type(() => CloverApiOrderTypeResModel)
    elements: CloverApiOrderTypeResModel[];
    href: string;
}
