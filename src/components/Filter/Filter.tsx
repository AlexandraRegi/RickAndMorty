import React, {useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {CheckBox, Icon} from '@rneui/themed';

import {listFilter, listSort} from '../../utils/constants';
import {CheckboxRadio} from '../CheckboxRadio/CheckboxRadio';
import {ModalComponent} from '../Modal/Modal';
import {useFilterContext} from '../../context/FilterContext';
import {useNavigation} from '../../hooks/useNavigation';

import {
  ApplyButton,
  ApplyText,
  CheckboxModal,
  ClearButton,
  ClearText,
  Container,
  ContainerCheckbox,
  Header,
  ModalInput,
  NameOfQualification,
  Title,
} from './Filter.styles';

export interface Filter {
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
}

export const Filter = () => {
  const navigation = useNavigation();

  const [clear, setClear] = useState(false);
  const [modalNameVisible, setModalNameVisible] = useState(false);
  const [modalSpeciesVisible, setModalSpeciesVisible] = useState(false);
  const [isNameChecked, setNameCheck] = useState(false);
  const [isSpeciesChecked, setSpeciesCheck] = useState(false);
  const [name, setName] = useState('');
  const [filterObj, setFilterObj] = useState<Filter>({});

  const {filter, setFilter} = useFilterContext();

  const handlerApplyButton = () => {
    setFilter({...filterObj, name: name});
    navigation.navigate('Character');
  };

  const handlerClearButton = () => {
    setClear(true);
    setNameCheck(false);
    setSpeciesCheck(false);
    setFilter({});
    setFilterObj({});
  };

  const handlerNameCheck = () => {
    setModalNameVisible(true);
    setNameCheck(prevState => !prevState);
  };

  const handlerSpeciesCheck = () => {
    setModalSpeciesVisible(true);
    setSpeciesCheck(prevState => !prevState);
  };

  return (
    <Container>
      <Header>
        <ClearButton onPress={handlerClearButton}>
          {Object.keys(filterObj).length !== 0 ||
            (Object.keys(filter).length !== 0 && <ClearText>Clear</ClearText>)}
        </ClearButton>
        <Title>Filter</Title>
        <ApplyButton onPress={handlerApplyButton}>
          <ApplyText>APPLY</ApplyText>
        </ApplyButton>
      </Header>
      <ContainerCheckbox>
        <CheckboxModal>
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
            checked={isNameChecked}
            onPress={handlerNameCheck}
          />
          <View>
            <NameOfQualification>Name</NameOfQualification>
            <Text>Give a name</Text>
          </View>
          <ModalComponent
            title="Name"
            modalVisible={modalNameVisible}
            setModalVisible={setModalNameVisible}>
            <ModalInput
              placeholder="Search"
              onChangeText={setName}
              value={name}
            />
          </ModalComponent>
        </CheckboxModal>
        <CheckboxModal>
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
            checked={isSpeciesChecked}
            onPress={handlerSpeciesCheck}
          />
          <View>
            <NameOfQualification>Species</NameOfQualification>
            <Text>Select one</Text>
          </View>
          <ModalComponent
            title="Species"
            modalVisible={modalSpeciesVisible}
            setModalVisible={setModalSpeciesVisible}>
            <CheckboxRadio
              item={listSort}
              filterObj={filterObj}
              setFilterObj={setFilterObj}
              clear={clear}
              setClear={setClear}
            />
          </ModalComponent>
        </CheckboxModal>
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
