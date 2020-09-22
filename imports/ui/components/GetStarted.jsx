import React, { useEffect } from 'react';
import Lottie from 'react-lottie';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { fadeInUp } from 'react-animations';

import Button from './reusable/Button';
import animationData from '../lottie/user.json';
import { NavLink } from 'react-router-dom';
import Wrapper from './reusable/Wrapper';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const fadeInUpAnimation = keyframes`${fadeInUp}`;

const MainBadge = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: 1s ${fadeInUpAnimation};
`;

const RightSide = styled.div`
  max-width: 500px;
  margin-left: auto;
  text-align: center;

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }

  p {
    font-size: 1.5rem;
    margin-bottom: 3rem;
  }
`;

useEffect(() => {
  return ;
}, []);

const GetStarted = () => {
  return (
    <Wrapper>
      <MainBadge>
        <RightSide>
          <h1>Welcome to Meteor!</h1>
          <p>
            Meteor is a platform where you can ask and answer questions from all over the world.{' '}
          </p>
          <NavLink to='/signup'>
            <Button>Get Started</Button>
          </NavLink>
        </RightSide>
        <Lottie options={defaultOptions} height={500} width={500} />
      </MainBadge>
    </Wrapper>
  );
};

export default GetStarted;
