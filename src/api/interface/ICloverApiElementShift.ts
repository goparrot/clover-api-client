import type { ICloverApiOverrideEmployee } from './ICloverApiOverrideEmployee';

export interface ICloverApiElementShift {
    id: string;
    cashTipsCollected: number;
    serverBanking: boolean;
    inTime: number;
    overrideInTime: number;
    overrideInEmployee: ICloverApiOverrideEmployee;
    overrideOutEmployee: ICloverApiOverrideEmployee;
}
