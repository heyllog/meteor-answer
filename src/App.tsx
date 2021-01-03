import React from 'react'
import { useRecoilValue } from 'recoil'
import { useRoutes } from 'react-router-dom'
import { ThemeProvider, Global, css } from '@emotion/react'

import themeConstants from './utils/theme'
import { themeAtom } from './atoms/theme'
import 'antd/dist/antd.css'

import Header from './components/Header'
import StartPage from './pages/StartPage'
import NotFound from './pages/NotFound'
import SignInPage from './pages/SignInPage'
import QuestionsPage from './pages/QuestionsPage'
import SignUpPage from './pages/SignUpPage'
import QuestionPage from './pages/QuestionPage'
import SearchPage from './pages/SearchPage'

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
    path: '/search',
    element: <SearchPage />,
  },
  {
    path: '/questions',
    element: <QuestionsPage />,
  },
  {
    path: '/questions/:id',
    element: <QuestionPage />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const App: React.FC = () => {
  const routes = useRoutes(routesConfig)
  const themeType: string = useRecoilValue(themeAtom)

  return (
    <ThemeProvider theme={themeConstants[themeType]}>
      <Global
        styles={css`
          @import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            transition: 0.3s background-color;
          }

          body {
            font-family: 'Comfortaa', sans-serif;
            background-color: ${themeConstants[themeType].background};
            color: ${themeConstants[themeType].primary};
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: ${themeConstants[themeType].primary};
          }

          a {
            cursor: pointer;
            color: ${themeConstants[themeType].primary};
            text-decoration: none;
          }
        `}
      />

      <Header />
      {routes}
    </ThemeProvider>
  )
}

export default App
