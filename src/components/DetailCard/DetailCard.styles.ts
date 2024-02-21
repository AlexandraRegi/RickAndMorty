import styled from 'styled-components/native';

export const DetailCardHeader = styled.View`
  display: flex;
  flex-direction: row;
  height: 44px;
  gap: 90px;
  padding: 10px;
`;

export const ButtonBack = styled.TouchableOpacity`
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

export const NameCharacterHeader = styled.Text`
  font-size: 15px;
  font-weight: 900;
  line-height: 20px;
  color: #081f32;
`;

export const PersonalInfo = styled.View`
  align-items: center;
  justify-content: center;
  height: 254px;
  margin-bottom: 20px;
`;

export const PersonalBackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 254px;
  justify-content: center;
`;

export const PersonalInfoImage = styled.Image`
  border-radius: 100px;
  border-style: solid;
  border-width: 5px;
  border-color: white;
  height: 130px;
  width: 130px;
  margin-bottom: 20px;
  align-self: center;
`;

export const PersonalInfoStatus = styled.Text`
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  color: #6e798c;
  align-self: center;
`;

export const PersonalInfoName = styled.Text`
  font-size: 28px;
  font-weight: 700;
  line-height: 34px;
  color: #081f32;
  align-self: center;
`;

export const PersonalInfoSpecies = styled.Text`
  font-size: 13px;
  font-weight: 900;
  line-height: 18px;
  color: #8e8e93;
  align-self: center;
`;

export const PersonalInfoTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 25px;
  color: #8e8e93;
  margin-bottom: 10px;
  margin-left: 10px;
`;

export const InfoSection = styled.View`
  border-top-width: 0.5px;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: #8e8e93;
  margin-bottom: 20px;
`;

export const Characteristic = styled.View`
  height: 60px;
  justify-content: center;
  margin-left: 10px;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: #8e8e93;
`;

export const CharacteristicName = styled.Text`
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  color: #081f32;
`;

export const CharacteristicValues = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 18px;
  color: #6e798c;
`;

export const Episodes = styled.View`
  height: 77px;
  justify-content: center;
  margin-left: 10px;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: #8e8e93;
`;

export const EpisodesDate = styled.Text`
  font-size: 11px;
  font-weight: 900;
  line-height: 13px;
  color: #8e8e93;
`;
