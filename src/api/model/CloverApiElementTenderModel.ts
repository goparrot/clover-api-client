import type { ICloverApiElementTender } from '../interface';

export class CloverApiElementTenderModel implements ICloverApiElementTender {
    editable: boolean;
    enabled: boolean;
    href: string;
    id: string;
    label: string;
    labelKey: string;
    opensCashDrawer: boolean;
    visible: boolean;
}
