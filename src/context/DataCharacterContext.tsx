import React, {
  PropsWithChildren,
  createContext,
  useMemo,
  useState,
} from 'react';

export interface ICharacter {
  id?: string | null | undefined;
  name?: string | null | undefined;
  status?: string | null | undefined;
  image?: string | undefined;
}

const initialValues = {
  dataCharacter: undefined as unknown as ICharacter[],
  setDataCharacter: (_values: ICharacter[]) => {},
};

export const DataCharacterContext = createContext(initialValues);

export const DataCharacterProvider = ({children}: PropsWithChildren) => {
  const [dataCharacter, setDataCharacter] = useState<ICharacter[]>([]);

  const value = useMemo(
    () => ({
      dataCharacter,
      setDataCharacter,
    }),
    [dataCharacter],
  );

  return (
    <DataCharacterContext.Provider value={value}>
      {children}
    </DataCharacterContext.Provider>
  );
};
