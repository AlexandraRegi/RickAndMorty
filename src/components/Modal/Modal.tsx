import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';

import {
  BackText,
  ModalHeader,
  ModalContainer,
  ModalTitle,
} from './Modal.styles';

interface Props {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  children: string | JSX.Element | JSX.Element[];
  title: string;
}

const ModalComponent = ({
  modalVisible,
  setModalVisible,
  children,
  title,
}: Props) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}>
      <ModalContainer>
        <ModalHeader>
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <BackText>{'< Back'}</BackText>
          </TouchableOpacity>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <View>{children}</View>
      </ModalContainer>
    </Modal>
  );
};

export default ModalComponent;
