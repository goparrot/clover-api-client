export interface ICloverApiServiceCharge {
    /* Unique identifier. */
    id: string;
    /* Service charge name. */
    name?: string;
    /* If this service charge is enabled. */
    enabled?: boolean;
    /**
     * @deprecated
     * @see percentageDecimal
     */
    percentage?: number;
    /* Percent to charge times 10000, e.g. 12.5% will be 125000. */
    percentageDecimal: number;
}
