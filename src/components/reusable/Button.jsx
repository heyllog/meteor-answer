import React from 'react'
import styled from '@emotion/styled'

import theme from '../../themes/theme'

const PrimaryButton = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  color: ${theme.background};
  background-color: ${theme.button};
  outline: none;
  font-family: 'Comfortaa', sans-serif;

  &:hover {
    background-color: ${theme.buttonOnHover};
  }
`

const Button = ({ children, onClick }) => <PrimaryButton onClick={onClick}>{children}</PrimaryButton>

export default Button
