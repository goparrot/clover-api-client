import type { CloverLabelKeyEnum } from '../enum';

export interface ICloverTender {
    /**
     * Check and Cash system tenders.
     *  @see CloverLabelKeyEnum
     */
    label_key: CloverLabelKeyEnum;
    /* Name of the custom merchant tender. */
    label: string;
    /* Uuid of the custom merchant tender. */
    id: string;
}
