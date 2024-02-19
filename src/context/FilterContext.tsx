import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const initialValues = {
  filter: undefined as unknown as Record<string, any>,
  setFilter: (_values: Record<string, any>) => {},
};

export const FilterContext = createContext(initialValues);

export const useFilterContext = () => useContext(FilterContext);

export const FilterProvider = ({children}: PropsWithChildren) => {
  const [filter, setFilter] = useState({});

  const value = useMemo(
    () => ({
      filter,
      setFilter,
    }),
    [filter],
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};
