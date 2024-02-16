import React from 'react';
import {Modal, View} from 'react-native';

import {
  BackText,
  ModalHeader,
  ModalContainer,
  ModalTitle,
  ModalButtonBack,
} from './Modal.styles';
import {BackIcon} from '../../icons/back';

interface Props {
  modalVisible: boolean;
  setModalVisible: (modalVisible: boolean) => void;
  children: string | JSX.Element | JSX.Element[];
  title: string;
}

export const ModalComponent = ({
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
          <ModalButtonBack onPress={() => setModalVisible(!modalVisible)}>
            <BackIcon />
            <BackText>{'Back'}</BackText>
          </ModalButtonBack>
          <ModalTitle>{title}</ModalTitle>
        </ModalHeader>
        <View>{children}</View>
      </ModalContainer>
    </Modal>
  );
};
