export interface Question {
  id: string
  shortcontent: string
  content: string
  answers: string[]
}

export interface Colors {
  background: string
  primary: string
  secondary: string
  button: string
  buttonOnHover: string
  buttonText: string
  placeholder: string
  formGray: string
  errorRed: string
  links: string
}

export interface Theme {
  wrapperSize: string
  light: Colors
  dark: Colors
  [index: string]: any
}
