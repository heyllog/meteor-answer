import React from 'react';
import Lottie from 'react-lottie';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { shake } from 'react-animations';

import animationData from '../lottie/404.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Animation = keyframes`${shake}`;

const MainBadge = styled.div`
  min-height: 89vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: 1s ${Animation};
`;

const NotFound = () => (
  <MainBadge>
    <Lottie options={defaultOptions} height={500} width={500} />
    <h1>404 Not Found</h1>
  </MainBadge>
);

export default NotFound;
