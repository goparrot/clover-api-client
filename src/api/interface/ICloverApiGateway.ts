import type { ICloverApiKeyInfo } from './ICloverApiKeyInfo';

export interface ICloverApiGateway {
    paymentProcessorName?: string;
    authorizationFrontEnd?: string;
    paymentGatewayApi?: string;
    accountName?: string;
    altMid?: string;
    mid?: string;
    tid?: string;
    supportsTipping?: boolean;
    frontendMid?: string;
    backendMid?: string;
    tokenType?: string;
    groupId?: string;
    supportsTipAdjust?: boolean;
    supportsNakedCredit?: boolean;
    supportsMultiPayToken?: boolean;
    supportsPreauthOverage?: boolean;
    keyPrefix?: string;
    keyInfo?: ICloverApiKeyInfo;
    newBatchCloseEnabled?: boolean;
    production?: boolean;
}
