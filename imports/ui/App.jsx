import React from 'react';
import {useRoutes} from "react-router-dom";
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import theme from './themes/theme';
import Header from './components/Header';
import MainPage from "./pages/MainPage";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const routesConfig = [
  {
    path: '/',
    element: <MainPage />,
  },
];

export const App = () => {
  let routes = useRoutes(routesConfig);

  return (<Wrapper>
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Comfortaa', sans-serif;
          background-color: ${theme.background};
          color: ${theme.primary};
        }
        
        a {
          cursor: pointer;
          color: ${theme.primary}
          text-decoration: none;
        }
      `}
    />
    <Header/>

    {routes}
  </Wrapper>)
};
