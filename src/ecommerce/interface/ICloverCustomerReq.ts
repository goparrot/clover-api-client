import type { CloverEcomindEnum } from '../enum';
import type { ICloverShipping } from './ICloverShipping';

export interface ICloverCustomerReq {
    /**
     * Indicates whether the card data used for a charge was entered by the customer (ecom) or merchant (moto).
     * @see CloverEcomindEnum
     */
    ecomind?: CloverEcomindEnum;
    /* Customer email address. */
    email: string;
    /* First (given) name of the customer. */
    firstName?: string;
    /* Last name (surname) of the customer. */
    lastName?: string;
    /* Full name of the customer. */
    name?: string;
    /* The tokenized card (cToken) which is saved as a card on file for future transactions. */
    source: string;
    /* Phone number of the customer. */
    phone?: string;
    /**
     * Shipping information for the customer.
     * @see ICloverShipping
     */
    shipping?: ICloverShipping;
}
