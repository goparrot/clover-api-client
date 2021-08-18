import type { CloverApiMerchantExpandFieldEnum } from '../enum';

export interface ICloverApiMerchantParam {
    expand: Partial<CloverApiMerchantExpandFieldEnum | `${CloverApiMerchantExpandFieldEnum}.${CloverApiMerchantExpandFieldEnum}`>[];
}
