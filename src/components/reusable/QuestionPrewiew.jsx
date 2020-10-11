import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import theme from '../../themes/theme'

const Container = styled.div`
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

const QuestionPreview = () => {
  return (
    <Container>
      <NavLink to='/questions/1'>
        <h2>Lorem ipsum dolor.</h2>
      </NavLink>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur fugit perferendis suscipit! Assumenda, maxime, officiis?</p>
    </Container>
  )
}

export default QuestionPreview
