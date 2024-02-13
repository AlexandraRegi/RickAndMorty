import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';

const initialValues = {
  page: undefined as unknown as number,
  setPage: (_values: number) => {},
};

export const PageContext = createContext(initialValues);

export const PageProvider = ({children}: PropsWithChildren) => {
  const [page, setPage] = useState<number>(1);

  const value = useMemo(
    () => ({
      page,
      setPage,
    }),
    [page],
  );

  return <PageContext.Provider value={value}>{children}</PageContext.Provider>;
};
