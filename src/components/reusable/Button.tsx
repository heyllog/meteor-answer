import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import { Colors } from '../../utils/types'

const PrimaryButton = styled.button`
  padding: 15px 20px;
  border: none;
  border-radius: 8px;
  color: ${({ theme }: { theme: Colors }) => theme.buttonText};
  background-color: ${({ theme }: { theme: Colors }) => theme.button};
  outline: none;
  font-family: 'Comfortaa', sans-serif;

  &:hover {
    background-color: ${({ theme }: { theme: Colors }) => theme.buttonOnHover};
  }
`

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  const theme: any = useTheme()

  return onClick ? (
    <PrimaryButton theme={theme} onClick={(event: React.MouseEvent<HTMLElement>) => onClick(event)}>
      {children}
    </PrimaryButton>
  ) : (
    <PrimaryButton theme={theme}>{children}</PrimaryButton>
  )
}

interface ButtonProps {
  children: React.ReactNode
  onClick?: any
}

export default Button
