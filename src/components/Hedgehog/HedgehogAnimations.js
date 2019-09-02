import { bounceIn, bounceOut, bounceOutUp, wobble } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const bounceAnimation = keyframes`${bounceIn}`;
export const BouncyDiv = styled.div`
  animation: 1.0s ${bounceAnimation};
`;

const bounceOutAnimation = keyframes`${bounceOut}`;
export const BounceOutDiv = styled.div`
  animation: 2.0s ${bounceOutAnimation};
`;

const bounceOutUpAnimation = keyframes`${bounceOutUp}`;
export const BounceOutUpDiv = styled.div`
  animation: 3.0s ${bounceOutUpAnimation};
`;

const wobbleAnimation = keyframes`${wobble}`;
export const WobbleDiv = styled.div`
  animation: 3.0s ${wobbleAnimation};
`;