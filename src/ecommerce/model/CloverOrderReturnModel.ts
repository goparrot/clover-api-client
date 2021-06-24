import type { ICloverOrderReturn } from '../interface';

export class CloverOrderReturnModel implements ICloverOrderReturn {
    has_more?: boolean;
    object?: string;
    url?: string;
}
