import React, {useState} from 'react';
import {FlatList} from 'react-native';

import CheckboxComponent from '../Checkbox/Checkbox';
import {IListFilter} from '../../utils/constants';
import {IFilter} from '../Filter/Filter';

import {SortName} from '../Filter/Filter.styles';

interface Props {
  item: IListFilter;
  setFilterObj: ({}: IFilter) => void;
  filterObj: IFilter;
  clear: boolean;
  setClear: (clear: boolean) => void;
}

const CheckboxRadio = ({
  item,
  filterObj,
  setFilterObj,
  clear,
  setClear,
}: Props) => {
  const [selectedCheckbox, setCheckbox] = useState(0);

  const listSort = item.list;
  const sortName = item.id;

  return (
    <>
      <SortName>{sortName}</SortName>
      <FlatList
        data={listSort}
        renderItem={item => (
          <CheckboxComponent
            {...item}
            selectedCheckbox={selectedCheckbox}
            setCheckbox={setCheckbox}
            sortName={sortName}
            filterObj={filterObj}
            setFilterObj={setFilterObj}
            clear={clear}
            setClear={setClear}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </>
  );
};

export default CheckboxRadio;