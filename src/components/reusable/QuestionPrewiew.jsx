import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import theme from '../../themes/theme'

const Container = styled.div`
  margin: 0 auto;
  padding: 1rem 0;
  background-color: #fff;
  border-radius: 0.5rem;

  h3 {
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
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

const QuestionPreview = ({ question }) => {
  return (
    <Container>
      <NavLink to={`/questions/${question.id}`}>
        <h3>{question.shortcontent}</h3>
      </NavLink>
      <p>{question.content}</p>
    </Container>
  )
}

export default QuestionPreview
