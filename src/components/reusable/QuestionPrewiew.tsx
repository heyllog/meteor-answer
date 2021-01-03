import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { NavLink } from 'react-router-dom'

import { Colors, Question } from '../../utils/types'

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border-radius: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.primary};
    cursor: pointer;

    &:hover {
      color: ${({ theme }: { theme: Colors }) => theme.secondary};
    }
  }

  @media all and (max-width: 910px) {
    margin: 0;
    border-radius: 0;
    border: none;
  }
`

const QuestionPreview: React.FC<QuestionPreviewProps> = ({ question }) => {
  const theme: any = useTheme()

  return (
    <Container theme={theme}>
      <NavLink to={`/questions/${question.id}`}>
        <h3>{question.shortcontent}</h3>
      </NavLink>
      <p>{question.content}</p>
    </Container>
  )
}

type QuestionPreviewProps = {
  question: Question
}

export default QuestionPreview
