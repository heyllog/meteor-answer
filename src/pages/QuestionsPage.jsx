import React from 'react'
import styled from '@emotion/styled'

import QuestionPreview from '../components/reusable/QuestionPrewiew'
import Wrapper from '../components/reusable/Wrapper'
import QuestionAsk from "../components/QuestionAsk";

const Questions = styled.div`
  h2 {
    padding: 2rem 0;
  }

  @media all and (max-width: 900px) {
    padding: 0 20px;
  }
`

const QuestionsPage = () => {
  return (
    <Wrapper width='900px'>
      <Questions>
        <QuestionAsk />

        <h2>Or read last questions: </h2>
        <QuestionPreview />
        <QuestionPreview />
        <QuestionPreview />
      </Questions>
    </Wrapper>
  )
}

export default QuestionsPage
