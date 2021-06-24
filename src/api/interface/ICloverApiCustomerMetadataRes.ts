import type { ICloverApiCustomer } from './ICloverApiCustomer';

export interface ICloverApiCustomerMetadataRes {
    /* The name of the business the customer is associated with. */
    businessName: string;
    /* A note about the customer. */
    note: string;
    /**
     * The year part of the date of birth for this customer.
     * This part of the date of birth is optional, i.e., it's possible that only dobMonth and dobDay are populated.
     */
    dobYear: string;
    /* The month part of the date of birth for this customer. */
    dobMonth: string;
    /* The day part of the date of birth for this customer. */
    dobDay: string;
    /* The timestamp from when this customer's data was last updated. */
    modifiedTime: string;
    /* Customer who this metadata belongs to. */
    customer: ICloverApiCustomer;
}
