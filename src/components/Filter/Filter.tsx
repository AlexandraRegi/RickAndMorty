import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

import {listFilter, listSort} from '../../utils/constants';
import CheckboxRadio from '../CheckboxRadio/CheckboxRadio';
import ModalComponent from '../Modal/Modal';
import {FilterContext} from '../../context/FilterContext';
import {DataCharacterContext} from '../../context/DataCharacterContext';
import {PageContext} from '../../context/PageContext';

import {
  ApplyButton,
  ApplyText,
  ClearButton,
  ClearText,
  Container,
  ContainerCheckbox,
  Header,
  ModalInput,
  Title,
} from './Filter.styles';

export interface IFilter {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}

const Filter = () => {
  const navigation = useNavigation();

  const [clear, setClear] = useState<boolean>(false);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalVisible2, setModalVisible2] = useState<boolean>(false);
  const [check, setCheck] = useState<boolean>(false);
  const [check2, setCheck2] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [filterObj, setFilterObj] = useState<IFilter>({});

  const {setFilter} = useContext(FilterContext);
  const {setDataCharacter} = useContext(DataCharacterContext);
  const {setPage} = useContext(PageContext);

  const handlerApplyButton = () => {
    setDataCharacter([]);
    setPage(1);
    setFilter({...filterObj, name: name});
    navigation.navigate('Character' as never);
  };

  const handlerClearButton = () => {
    setClear(true);
    setCheck(false);
    setCheck2(false);
    setFilter({});
    setFilterObj({});
  };

  const handlerCheck = () => {
    setModalVisible(true);
    setCheck(!check);
  };

  const handlerCheck2 = () => {
    setModalVisible2(true);
    setCheck2(!check2);
  };

  return (
    <Container>
      <Header>
        <ClearButton onPress={handlerClearButton}>
          {Object.keys(filterObj).length !== 0 && <ClearText>Clear</ClearText>}
        </ClearButton>
        <Title>Filter</Title>
        <ApplyButton onPress={handlerApplyButton}>
          <ApplyText>APPLY</ApplyText>
        </ApplyButton>
      </Header>
      <ContainerCheckbox>
        <CheckBox
          title={'Name'}
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
          checked={check}
          onPress={handlerCheck}
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
        <ModalComponent
          title="Name"
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}>
          <ModalInput
            placeholder="Search"
            onChangeText={setName}
            value={name}
          />
        </ModalComponent>
        <CheckBox
          title={'Species'}
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
          checked={check2}
          onPress={handlerCheck2}
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
        <ModalComponent
          title="Species"
          modalVisible={modalVisible2}
          setModalVisible={setModalVisible2}>
          <CheckboxRadio
            item={listSort}
            filterObj={filterObj}
            setFilterObj={setFilterObj}
            clear={clear}
            setClear={setClear}
          />
        </ModalComponent>
        <FlatList
          data={listFilter}
          renderItem={item => (
            <CheckboxRadio
              {...item}
              filterObj={filterObj}
              setFilterObj={setFilterObj}
              clear={clear}
              setClear={setClear}
            />
          )}
          keyExtractor={item => item.id}
        />
      </ContainerCheckbox>
    </Container>
  );
};

export default Filter;
