import styled from '@emotion/styled'
import { Colors } from '../../utils/types'

const IncorrectBadge = styled.p`
  margin-left: 30px;
  margin-bottom: 20px;
  color: ${({ theme }: { theme: Colors }) => theme.errorRed};
`

export default IncorrectBadge
