import type { ICloverApiInventoryParam, ICloverApiInventoryParamMappedFilters } from '../../api/inventory';

export function mapParams(params: Partial<ICloverApiInventoryParam>): Partial<ICloverApiInventoryParamMappedFilters> | Partial<ICloverApiInventoryParam> {
    return params.filter
        ? {
              ...params,
              filter: Object.entries(params.filter ?? {}).map(([key, value]) =>
                  value && Array.isArray(value) ? encodeURIComponent(`${key} in (${value.map((el) => `'${el}'`).join(',')})`) : `${key}=${value.toString()}`,
              ),
          }
        : params;
}
