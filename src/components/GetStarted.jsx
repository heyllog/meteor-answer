import React from 'react'
import Lottie from 'react-lottie'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/core'
import { fadeInUp } from 'react-animations'
import { NavLink } from 'react-router-dom'

import Button from './reusable/Button'
import animationData from '../lottie/user.json'
import Wrapper from './reusable/Wrapper'

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
}

const fadeInUpAnimation = keyframes`${fadeInUp}`

const MainBadge = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  animation: 1s ${fadeInUpAnimation};

  @media all and (max-width: 1050px) {
    margin-top: 50px;
    flex-direction: column;
  }
`

const LeftSide = styled.div`
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

  @media all and (max-width: 1050px) {
    margin-left: 0;
    margin-bottom: 16px;
    padding: 0 30px;
  }
`

const RightSide = styled.div`
  max-width: 500px;
  margin-left: 30px;
  margin-right: auto;

  @media all and (max-width: 1050px) {
    margin: 30px auto;
    padding: 0 30px;
  }
`

const GetStarted = () => {
  return (
    <Wrapper>
      <MainBadge>
        <LeftSide>
          <h1>Welcome to Meteor!</h1>
          <p>Meteor is a platform where you can ask and answer questions from all over the world. </p>
          <NavLink to='/signup'>
            <Button>Get Started</Button>
          </NavLink>
        </LeftSide>
        <RightSide>
          <Lottie options={defaultOptions} />
        </RightSide>
      </MainBadge>
    </Wrapper>
  )
}

export default GetStarted
