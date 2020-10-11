import React from 'react'
import QuestionPreview from '../components/reusable/QuestionPrewiew'
import Wrapper from '../components/reusable/Wrapper'
import styled from '@emotion/styled'

const Questions = styled.div`
  h1 {
    padding: 30px;
  }
`

const QuestionsPage = () => {
  return (
    <Wrapper width='900px'>
      <Questions>
        <h1>Last questions: </h1>
        <QuestionPreview />
        <QuestionPreview />
        <QuestionPreview />
      </Questions>
    </Wrapper>
  )
}

export default QuestionsPage
