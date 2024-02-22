import styled from 'styled-components/native';

export const CharacterCard = styled.TouchableOpacity`
  width: 45%;
  height: 219px;
  border: 1px solid #efeff4;
  border-radius: 8px;
  margin: 10px;
`;

export const CharacterImage = styled.Image`
  width: 100%;
  height: 140px;
  border-radius: 8px 8px 0px 0px;
`;

export const CharacterInfo = styled.View`
  padding: 12px;
`;

export const CharacterName = styled.Text`
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  color: #081f32;
`;
