import type { ICloverFailureCode } from '../interface';

export class CloverFailureCodeModel implements ICloverFailureCode {
    code: string;
    type: string;
}
