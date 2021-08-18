import { Type } from 'class-transformer';
import type { ICloverApiGateway } from '../interface';
import { CloverApiKeyInfoModel } from './CloverApiKeyInfoModel';

export class CloverApiGatewayModel implements ICloverApiGateway {
    accountName?: string;
    altMid?: string;
    authorizationFrontEnd?: string;
    backendMid?: string;
    frontendMid?: string;
    groupId?: string;
    @Type(() => CloverApiKeyInfoModel)
    keyInfo?: CloverApiKeyInfoModel;
    keyPrefix?: string;
    mid?: string;
    newBatchCloseEnabled?: boolean;
    paymentGatewayApi?: string;
    paymentProcessorName?: string;
    production?: boolean;
    supportsMultiPayToken?: boolean;
    supportsNakedCredit?: boolean;
    supportsPreauthOverage?: boolean;
    supportsTipAdjust?: boolean;
    supportsTipping?: boolean;
    tid?: string;
    tokenType?: string;
}
