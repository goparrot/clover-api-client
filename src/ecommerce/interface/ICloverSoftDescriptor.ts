export interface ICloverSoftDescriptor {
    /* Merchant name/product/service to be used in lieu of the DBA name. */
    dba_name: string;
    /* Merchant address street. */
    street: string;
    /* Merchant address city. */
    city: string;
    /* Business region. */
    region: string;
    /* Business postal / zip code. */
    postal_code: string;
    /* 3 digit country code. E.g., 840 for USA. */
    country_code: string;
    /* Merchant email address. Limited to 13 digits for Visa and Discover. */
    merchant_contact_info: string;
}
