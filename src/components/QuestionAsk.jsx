import React from 'react'
import styled from '@emotion/styled'
import theme from '../themes/theme'

const AskForm = styled.div`
  display: flex;
  flex-direction: column;
`

const QuestionTitle = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;

  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;
`
const QuestionBody = styled.textarea`
  min-height: 100px;
  padding: 1rem;

  outline: none;
  resize: none;
  border: none;
  border-bottom: 1px solid ${theme.primary};
  //border: 1px solid ${theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;
`

const QuestionAsk = () => (
  <AskForm>
    <h2>Ask something:</h2>
    <QuestionTitle placeholder='Title...' />
    <QuestionBody placeholder='Question...' />
  </AskForm>
)

export default QuestionAsk
