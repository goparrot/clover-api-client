import type { ICloverPayOrderSource } from './ICloverPayOrderSource';

export interface ICloverCardTokenRes {
    id: string;
    object: string;
    card: ICloverPayOrderSource;
    /* Creation time of the token object. */
    created?: number;
    /* Token type. */
    type?: string;
}
