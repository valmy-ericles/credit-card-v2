import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  background: #0EC4EC;
  height: 57px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
`;
