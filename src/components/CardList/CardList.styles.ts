import styled from 'styled-components/native';

export const Container = styled.View`
  //flex: 1;
  background-color: #fff;
  height: 95%;
`;

export const Header = styled.View`
  background-color: #F2F2F7;
  //height: 80px;
  height: 12%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  align-self: flex-end;
  margin: 16px 16px 0 16px;
  color: #081f32;
`;

export const Filter = styled.Text`
  font-size: 17px;
  font-weight: 900;
  line-height: 22px;
  align-self: flex-start;
  margin: 16px;
  color: #5856d6;
`;

export const CharactersList = styled.View`
  //height: 100vh;
  //flex: 1;
  //display: flex;
  //flex: 50%;
  //grid-template-columns: repeat(2, 1fr);
  //grid-template-rows: 100px 100px;
  //grid-template-rows: repeat(2, 1fr);
  //flex-direction: row;
  //flex-wrap: wrap;
  //gap: 14px;
  padding: 5px;
`;
