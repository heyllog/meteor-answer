import React from 'react'
import styled from '@emotion/styled'
import theme from '../themes/theme'
import Wrapper from '../components/reusable/Wrapper'

const AnswersBox = styled.div`
  h1 {
    padding-left: 30px;
  }

  input {
    display: block;
    height: 60px;
    width: 90%;
    margin: 50px auto;
    border: none;
    &::placeholder {
      transform: translateY(0px);
      transition: 0.5s;
    }
    &:hover,
    &:focus,
    &:active:focus {
      color: ${theme.primary};
      outline: none;
      border-bottom: 1px solid ${theme.orange};
      &::placeholder {
        color: ${theme.orange};
        position: relative;
        transform: translateY(-20px);
      }
    }
  }

  .email,
  .pwd {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: ${theme.formGray};
    font-weight: lighter;
    transition: 0.5s;
  }
`

const QuestionBox = styled.div`
  margin: 16px auto;
  padding: 30px;
  background-color: #fff;
  border: 1px solid ${theme.primary};
  border-radius: 8px;

  h2 {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${theme.primary};
    cursor: pointer;
    transition: 0.3s color;

    &:hover {
      color: ${theme.orange};
    }
  }

  @media all and (max-width: 910px) {
    margin: 0;
    border-radius: 0;
    border: none;
  }
`

const QuestionPage = () => {
  return (
    <Wrapper width='700px'>
      <QuestionBox>
        <h2>Lorem ipsum dolor.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit perferendis suscipit! Assumenda, maxime, officiis?</p>
      </QuestionBox>
      <AnswersBox>
        <input type='text' className='email' placeholder='Write your answer...' />
        <h1>Answers: </h1>
        <QuestionBox>
          <h2>Maxim Loginov</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </QuestionBox>
        <QuestionBox>
          <h2>Ann Kale</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor harum ipsa minima molestias ratione ullam.</p>
        </QuestionBox>
      </AnswersBox>
    </Wrapper>
  )
}

export default QuestionPage
