import React from 'react'
import { useRoutes } from 'react-router-dom'
import { Global, css } from '@emotion/core'

import theme from './themes/theme'
import Header from './components/Header'

import StartPage from './pages/StartPage'
import NotFound from './pages/NotFound'
import SignInPage from './pages/SignInPage'
import QuestionsPage from './pages/QuestionsPage'
import SignUpPage from './pages/SignUpPage'
import QuestionPage from './pages/QuestionPage'

const routesConfig = [
  {
    path: '/',
    element: <StartPage />,
  },
  {
    path: '/signup',
    element: <SignUpPage />,
  },
  {
    path: '/signin',
    element: <SignInPage />,
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
  },
  {
    path: '/questions/1',
    element: <QuestionPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const App = () => {
  const routes = useRoutes(routesConfig)

  return (
    <>
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
            color: ${theme.primary};
            text-decoration: none;
          }
        `}
      />

      <Header />
      {routes}
    </>
  )
}

export default App
