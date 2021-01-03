import styled from '@emotion/styled'
import { Colors } from '../../utils/types'

const Form = styled.form`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    padding: 30px;
    font-weight: lighter;
    text-transform: uppercase;
    color: ${({ theme }: { theme: Colors }) => theme.primary};
  }

  input {
    display: block;
    height: 60px;
    width: 90%;
    margin: 0 auto;
    border: none;
    background-color: ${({ theme }: { theme: Colors }) => theme.background};

    &::placeholder {
      transform: translateY(0px);
      transition: 0.5s;
      color: ${({ theme }: { theme: Colors }) => theme.placeholder};
    }

    &:hover,
    &:focus,
    &:active:focus {
      color: ${({ theme }: { theme: Colors }) => theme.primary};
      outline: none;
      border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.secondary};

      &::placeholder {
        color: ${({ theme }: { theme: Colors }) => theme.secondary};
        position: relative;
        transform: translateY(-20px);
      }
    }
  }

  .email,
  .pwd {
    position: relative;
    border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.placeholder};
    color: ${({ theme }: { theme: Colors }) => theme.formGray};
    font-weight: lighter;
  }

  span {
    text-align: center;
  }
`

export default Form
