import styled from '@emotion/styled'

import themeConstants from '../../utils/theme'

const Wrapper = styled.div<WrapperProps>`
  max-width: ${props => (props.width ? props.width : themeConstants.wrapperSize)};
  margin: 0 auto;
`

type WrapperProps = {
  width?: string
}

export default Wrapper
