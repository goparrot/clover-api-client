import type { CloverApiCustomerExpandFieldEnum } from '../enum';
import type { ICloverApiCustomerFilterField } from './ICloverApiCustomerFilterField';

export interface ICloverApiCustomerParam {
    expand: Partial<CloverApiCustomerExpandFieldEnum>[];
    /**
     * @default 100
     */
    limit: number;
    filter: Partial<ICloverApiCustomerFilterField>;
}
