import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 100%;
`;

export const Header = styled.View`
  background-color: #f2f2f7;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-weight: 700;
  line-height: 41px;
  align-self: flex-end;
  margin-top: 16px;
  margin-horizontal: 16px;
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
