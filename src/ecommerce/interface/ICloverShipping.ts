import type { ICloverAddress } from './ICloverAddress';

export interface ICloverShipping {
    address: ICloverAddress;
    /* Delivery service used to ship the physical product (DHL, Fedex, US Postal Service, etc.). */
    carrier?: string;
    /* Product recipient's name. */
    name?: string;
    /* Product recipient's phone (including extension). */
    phone?: string;
    /* Shipment number provided by the carrier. Use a comma-separated list for multiple tracking numbers. */
    tracking_number?: string;
}
