import React from 'react';
import styled from '@emotion/styled';

import theme from "../../themes/theme";

const Wrapper = styled.div`
  max-width: ${props => props.width ? props.width : theme.wrapperSize};
  margin: 0 auto;
`;

export default Wrapper;
