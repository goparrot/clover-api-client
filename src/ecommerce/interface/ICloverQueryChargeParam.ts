import type { CloverComparisonOperatorEnum } from '../enum';

export interface ICloverQueryChargeParam {
    /**
     * Filters the results based on an open- or closed-ended date-time range.
     * Each filter part requires the parameter name, such as created or status_transitions, a comparison operator (gt, gte, lt, or lte), and a date-time or Unix timestamp (in milliseconds).
     * The query string uses one of the following formats: {parameterName}.{comparisonOperator}=YYYY-MM-DDThhmmss or {parameterName}.{comparisonOperator}={timestamp}.
     * For example, to filter the results for objects created after January 12, 2021 but before January 15 at 3 PM, add the following to the request created.gt=2021-01-12&created.lte=2021-01-15T150000.
     */
    created: Record<CloverComparisonOperatorEnum, string | number>;
    status_transitions: Record<CloverComparisonOperatorEnum, string | number>;
    /**
     * Returns charges associated with the provided customer ID.
     */
    customer: string;
    /**
     * Cursor used in pagination. The ending_before object ID sets your place in the list.
     * For example, if you receive 100 objects in a list starting with obj_bar,
     * add ending_before=obj_bar in your subsequent request to retrieve the previous page of the list.
     */
    ending_before: string;
    /**
     * Specify fields in the response for expansion.
     */
    expand: string[];
    /**
     * The number of objects returned by the request, ranging between 1 and 100.
     * The default value is 10.
     */
    limit: number;
    /**
     * Cursor used in pagination.
     * The starting_after object ID sets your place in the list.
     * For example, if you receive 100 objects in a list starting with obj_foo, add starting_after=obj_foo in your subsequent request to retrieve the next page of the list.
     */
    starting_after: string;
}
