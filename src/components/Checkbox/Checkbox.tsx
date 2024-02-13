import React from 'react';
import {CheckBox, Icon} from '@rneui/themed';

import {IFilter} from '../Filter/Filter';

interface Props {
  item: {id: number; sort: string};
  selectedCheckbox: number;
  setCheckbox: (selectedCheckbox: number) => void;
  setFilterObj: ({}: IFilter) => void;
  filterObj: IFilter;
  sortName: string;
  clear: boolean;
  setClear: (clear: boolean) => void;
}

const CheckboxComponent = ({
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
    <>
      <CheckBox
        title={item?.sort}
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="#5856D6"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="#AEAEB2"
            size={25}
            iconStyle={{marginRight: 10}}
          />
        }
        checked={selectedCheckbox === item?.id}
        onPress={handlerCheckbox}
        containerStyle={{
          borderTopWidth: 0.7,
          borderStyle: 'solid',
          borderColor: '#AEAEB2',
          margin: 0,
        }}
        textStyle={
          {
            color: '#081f32',
            fontSize: 17,
            fontWeight: 400,
            lineHeight: 22,
          } as any
        }
      />
    </>
  );
};

export default CheckboxComponent;
