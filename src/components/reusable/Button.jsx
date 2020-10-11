import React from 'react'
import styled from '@emotion/styled'

import theme from '../../themes/theme'

const PrimaryButton = styled.span`
  padding: 15px 20px;
  border-radius: 8px;
  color: ${theme.background};
  background-color: ${theme.button};

  &:hover {
    background-color: ${theme.buttonOnHover};
  }
`

const Button = ({ children }) => <PrimaryButton>{children}</PrimaryButton>

export default Button
