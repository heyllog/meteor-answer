import styled from '@emotion/styled'
import { Colors } from '../../utils/types'

const HaveAccount = styled.p`
  display: inline-block;
  width: 100%;
  margin: 30px 0 15px 0;

  text-decoration: none;
  text-align: center;
  color: ${({ theme }: { theme: Colors }) => theme.formGray};
  font-weight: lighter;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }: { theme: Colors }) => theme.secondary};
  }
`

export default HaveAccount
