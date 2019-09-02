import { rotateIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes`${rotateIn}`;
export const RotatingDiv = styled.div`
  animation: 1.0s ${rotateAnimation};
`;