export interface ICloverSource {
    /* Unique identifier (Clover token). */
    id: string;
    /* Brand of card presented by the customer. */
    brand: string;
    /* First six digits of the card PAN. */
    first6: string;
    /* Last four digits of the card PAN. */
    last4: string;
    /* Type of source (for example, a card or bank account). */
    object?: string;
    /* City segment of the provided billing address. */
    address_city?: string;
    /* Country segment of the provided billing address. */
    address_country?: string;
    /**
     * First line of the provided billing address.
     * This includes the building number and street name.
     */
    address_line1?: string;
    /* If an address_line1 was provided, the result of the verification check (one of pass, failed, unavailable, or unchecked). */
    address_line1_check?: string;
    /* Second line of the provided billing address (the room, suite, or apartment number). */
    address_line2?: string;
    /* State or province segment of the provided billing address. */
    address_state?: string;
    /* Zip or postal code segment of the provided billing address. */
    address_zip?: string;
    /* If an address_zip was provided, the result of the verification check (one of pass, failed, unavailable, or unchecked). */
    address_zip_check?: string;
    /* Two-letter ISO code for the country where the card was issued. */
    country?: string;
    /* If a card security code was provided, the result of the verification check (one of pass, failed, unavailable, or unchecked). */
    cvc_check?: string;
    /* Two-digit number representing the card's expiration month. */
    exp_month?: string;
    /* Four-digit number representing the card's expiration year. */
    exp_year?: string;
    /* Unique identifier for this source. */
    fingerprint?: string;
    /* Type of card funding (one of credit, debit, prepaid, or unknown). */
    funding?: string;
    /* Cardholder name. */
    name?: string;
}
