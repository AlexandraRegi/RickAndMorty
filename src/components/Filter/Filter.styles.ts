import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  //flex: 1;
  height: 100%;
`;

export const Header = styled.View`
  //height: 80px;
  height: 8%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 15px;
  font-weight: 900;
  line-height: 20px;
  color: #081f32;
`;

export const ClearButton = styled.TouchableOpacity`
  width: 40px;
`;

export const ClearText = styled.Text`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  color: #5856d6;
`;

export const ApplyButton = styled.TouchableOpacity`
  width: 64px;
  height: 28px;
  border-radius: 20px;
  background-color: #5856d6;
  align-items: center;
  justify-content: center;
  padding: 0px 12px;
`;

export const ApplyText = styled.Text`
  color: #ffffff;
  font-size: 13px;
  font-weight: 900;
  line-height: 18px;
`;

export const ContainerCheckbox = styled.View`
  //flex: 1;
  //height: 95%;
`;

export const SortName = styled.Text`
  color: #00000066;
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  margin: 15px 0px 0px 20px;
`;

export const ModalInput = styled.TextInput`
  margin: 10px 15px;
  padding: 10px;
  height: 36px;
  border: 1px solid transparent;
  border-radius: 10px;
  background-color: #e5e5ea;
`;

export const SortSpecies = styled.View`
  display: flex;
  flex-direction: row;
`;
