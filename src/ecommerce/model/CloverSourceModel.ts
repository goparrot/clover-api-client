import type { ICloverSource } from '../interface';
import { CloverOptionalSourceModel } from './CloverOptionalSourceModel';

export class CloverSourceModel extends CloverOptionalSourceModel implements ICloverSource {
    id: string;
    brand: string;
    first6: string;
    last4: string;
}
