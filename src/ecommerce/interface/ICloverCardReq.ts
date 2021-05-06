import type { CloverCardBrandEnum } from '../../common';

export interface ICloverCardReq {
    /* The card number. */
    number: string;
    /* Encrypted card primary account number (PAN) provided by TransArmor. */
    encrypted_pan?: string;
    /* Card expiration month in two-digit format. */
    exp_month: string;
    /* Card expiration year in two or four-digit format. */
    exp_year: string;
    /* Card verification value. */
    cvv: string;
    /* Last four numbers of the PAN. */
    last4?: string;
    /* First six numbers of the PAN. */
    first6?: string;
    /* Two-character country code. */
    country?: string;
    /* Card brand */
    brand?: CloverCardBrandEnum;
    /* Cardholder's full name. */
    name?: string;
    /* Address line 1 (Street address/P.O. Box/Company name). */
    address_line1?: string;
    /* Address line 2 (Apartment/Suite/Unit/Building). */
    address_line2?: string;
    /* City/District/Suburb/Town/Village. */
    address_city?: string;
    /* State/County/Province/Region. */
    address_state?: string;
    /* ZIP or postal code. */
    address_zip?: string;
    /* Billing address country, if provided. */
    address_country?: string;
}
