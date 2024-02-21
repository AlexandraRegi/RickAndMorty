import React from 'react';
import {CheckBox, Icon} from '@rneui/themed';

import {Filter} from '../Filter/Filter';
import {Container, SortContainer, SortName} from './Checkbox.styles';

interface Props {
  item: {id: number; sort: string};
  selectedCheckbox: number;
  setCheckbox: (selectedCheckbox: number) => void;
  setFilterObj: ({}: Filter) => void;
  filterObj: Filter;
  sortName: string;
  clear: boolean;
  setClear: (clear: boolean) => void;
}

export const CheckboxComponent = ({
  item,
  selectedCheckbox,
  setCheckbox,
  setFilterObj,
  filterObj,
  sortName,
  clear,
  setClear,
}: Props) => {
  if (clear) {
    setCheckbox(0);
    setClear(false);
  }

  const handlerCheckbox = () => {
    setCheckbox(item?.id);
    if (selectedCheckbox !== item?.id && sortName === 'Status') {
      setFilterObj({...filterObj, status: item.sort});
    }
    if (selectedCheckbox !== item?.id && sortName === 'Gender') {
      setFilterObj({...filterObj, gender: item.sort});
    }
    if (selectedCheckbox !== item?.id && sortName === 'Species') {
      setFilterObj({...filterObj, species: item.sort});
    }
  };

  return (
    <Container>
      <CheckBox
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="#5856D6"
            size={25}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="#AEAEB2"
            size={25}
          />
        }
        checked={selectedCheckbox === item?.id}
        onPress={handlerCheckbox}
        containerStyle={{
          margin: 0,
        }}
      />
      <SortContainer>
        <SortName>{item?.sort}</SortName>
      </SortContainer>
    </Container>
  );
};
