import { FilterField, FilterFieldNames, MovieFilters } from '../api/types';

export const createSearchQuery = (params: Record<string, any>) => {
  const filteredParams = filterObject(params);
  if (!Object.values(filteredParams).length) {
    return '';
  }
  return '?' + new URLSearchParams(filteredParams).toString();
};

export const filterObject = <T>(obj: Record<string, T>) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, v]) => v !== undefined)
  );
};

export const mapFilterOptions = (options: FilterField[]) => [
  { id: 'default', name: 'All' },
  ...options.map((e) => ({ id: e.name, name: e.name })),
];

export const getInitialFilters = (searchParams: URLSearchParams) => {
  const initialFilters: MovieFilters = {};

  for (let [k, v] of searchParams.entries()) {
    const fieldName = k as FilterFieldNames;
    if (Object.values(FilterFieldNames).includes(fieldName) && v) {
      initialFilters[fieldName] = v;
    }
  }

  return initialFilters;
};
