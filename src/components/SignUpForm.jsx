import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

import theme from '../themes/theme'
import Button from './reusable/Button'

const Form = styled.div`
  max-width: 600px;
  margin: 0 auto;

  h2 {
    padding: 30px;
    font-weight: lighter;
    text-transform: uppercase;
    color: ${theme.primary};
  }

  input {
    display: block;
    height: 60px;
    width: 90%;
    margin: 0 auto;
    border: none;
    &::placeholder {
      transform: translateY(0px);
      transition: 0.5s;
    }
    &:hover,
    &:focus,
    &:active:focus {
      color: ${theme.primary};
      outline: none;
      border-bottom: 1px solid ${theme.orange};
      &::placeholder {
        color: ${theme.orange};
        position: relative;
        transform: translateY(-20px);
      }
    }
  }

  .email,
  .pwd {
    position: relative;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    color: ${theme.formGray};
    font-weight: lighter;
    transition: 0.5s;
  }

  span {
    text-align: center;
  }
`

const HaveAccount = styled.p`
  display: inline-block;
  width: 100%;
  margin: 30px 0 15px 0;

  text-decoration: none;
  text-align: center;
  color: ${theme.formGray};
  font-weight: lighter;
  transition: 0.5s;

  &:hover {
    color: ${theme.orange};
  }
`

const SignUpButton = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 25px;
  text-align: center;
`

const SignUpForm = () => {
  return (
    <Form>
      <h2>Create your account</h2>
      <form>
        <input type='text' className='email' placeholder='EMAIL' />
        <br />
        <input type='password' className='pwd' placeholder='PASSWORD' />
        <br />
        <input type='password' className='pwd' placeholder='CONFIRM PASSWORD' />
      </form>
      <NavLink to='/signin' className='link'>
        <HaveAccount>Already have an account?</HaveAccount>
      </NavLink>
      <br />
      <SignUpButton>
        <NavLink to='/questions'>
          <Button>Sign Up</Button>
        </NavLink>
      </SignUpButton>
    </Form>
  )
}

export default SignUpForm
