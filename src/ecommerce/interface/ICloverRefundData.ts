export interface ICloverRefundData {
    /* Set to true if there is another page of list items after the current page. */
    has_more: boolean;
    /* Object type. Objects with the same type have the same value. */
    object: string;
    /* URL of the list of refunds. */
    url: string;
}
