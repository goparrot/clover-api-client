export interface ICloverApiOverrideMerchantTender {
    /* Unique identifier. */
    id?: string;
    /* If this merchant tender is editable. */
    editable?: string;
    /* Label Key. */
    labelKey?: string;
    /* Label Key. */
    label?: string;
    /* If this tender opens the cash drawer. */
    opensCashDrawer?: boolean;
    /* Allow tipping on payment from tender. */
    supportsTipping?: boolean;
    /* If this merchant tender is enabled. */
    enabled?: boolean;
    /* If this merchant tender is visible. */
    visible?: boolean;
    /* Label Key. */
    instructions?: string;
}
