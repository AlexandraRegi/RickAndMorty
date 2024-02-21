import styled from 'styled-components/native';

export const ModalContainer = styled.View`
  flex: 1;
  background-color: white;
`;

export const ModalHeader = styled.View`
  display: flex;
  flex-direction: row;
  gap: 110px;
  padding: 10px;
`;

export const ModalTitle = styled.Text`
  font-size: 15px;
  font-weight: 900;
  line-height: 20px;
  color: #081f32;
`;

export const ModalButtonBack = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

export const BackText = styled.Text`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: #5856d6;
`;
