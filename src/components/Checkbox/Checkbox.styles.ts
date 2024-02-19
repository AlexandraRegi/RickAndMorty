import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SortContainer = styled.View`
  width: 350px;
  height: 50px;
  justify-content: center;
  border-bottom-width: 0.5px;
  border-style: solid;
  border-color: #aeaeb2;
`;

export const SortName = styled.Text`
  color: #081f32;
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
`;
