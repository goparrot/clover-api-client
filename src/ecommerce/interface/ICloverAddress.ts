export interface ICloverAddress {
    /* The city, district, suburb, town, or village. */
    city: string;
    /* Two-letter country code. */
    country: string;
    /* First line of the address (includes the street address, PO box, or company name). */
    line1: string;
    /* Second line of the address (includes the apartment, suite, unit, or building number). */
    line2: string;
    /* ZIP or postal code. */
    postal_code: string;
    /* The state, county, province, or region. */
    state: string;
}
