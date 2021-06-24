import type { CloverComparisonOperatorEnum } from '../enum';

export interface ICloverQueryRefundParam {
    /**
     * Retrieve refunds applied to a specific charge.
     */
    charge: string;
    /**
     * List filter based on the object's created field.
     * The value can be a string with a Unix timestamp (in milliseconds) or a dictionary of multiple options describing a time range.
     */
    created: Record<CloverComparisonOperatorEnum, string | number>;
    ending_before: string;
    limit: number;
    starting_after: string;
}
