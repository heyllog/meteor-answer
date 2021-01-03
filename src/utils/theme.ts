import { Theme } from './types'

const themeConstants: Theme = {
  wrapperSize: '1300px',

  light: {
    background: '#ffffff',
    primary: '#1b2448',
    secondary: '#FF6A3E',
    button: '#595dff',
    buttonOnHover: '#7679fa',
    buttonText: '#ffffff',
    placeholder: '#858585',
    formGray: '#858585',
    errorRed: '#e92730',
    links: '#64acff',
  },
  dark: {
    background: '#1b2448',
    primary: '#ffffff',
    secondary: '#FF6A3E',
    button: '#595dff',
    buttonOnHover: '#7679fa',
    buttonText: '#ffffff',
    placeholder: '#c1c0c0',
    formGray: '#e7e7e7',
    errorRed: '#e92730',
    links: '#64acff',
  },
}

export default themeConstants
