import type { ICloverReturnOrderItem } from './ICloverReturnOrderItem';

export interface ICloverReturnOrderRes {
    /* Total amount for the return in the smallest monetary unit of the merchant's currency. */
    amount: number;
    amount_returned: number;
    /* Creation time of the object (Unix timestamp in milliseconds). */
    created?: number;
    /* Three-letter ISO 4217 currency code (in lowercase). */
    currency: string;
    /* Unique object ID. */
    id: string;
    /* The item or items being returned. */
    items?: ICloverReturnOrderItem[];
    /* Set to true if the object is in production. Set to false if the object is in sandbox. */
    livemode?: boolean;
    /* Object type. Objects with the same type have the same value. */
    object?: string;
    status: string;
    status_transitions: Record<string, string | number | boolean>;
}
