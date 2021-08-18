import type { ICloverApiDefaultPaymentProcessor } from '../interface';

export class CloverApiDefaultPaymentProcessorModel implements ICloverApiDefaultPaymentProcessor {
    id: string;
    name: string;
    paymentGatewayApi: string;
    production: boolean;
}
