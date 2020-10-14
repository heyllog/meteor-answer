import React, { useState } from 'react'
import styled from '@emotion/styled'
import { NavLink, useNavigate } from 'react-router-dom'

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

const IncorrectBadge = styled.p`
  margin-left: 30px;
  margin-bottom: 20px;
  color: ${theme.errorRed};
`

const SignUpButton = styled.div`
  display: inline-block;
  width: 100%;
  margin-top: 25px;
  text-align: center;
`

const SignUpForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [incorrectData, setIncorrectData] = useState('')

  const handleClick = () => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      setIncorrectData('Incorrect email')
    } else if (password < 7) {
      setIncorrectData('Password should contain at least 7 characters')
    } else if (password !== confirmPassword) {
      setIncorrectData('Passwords do not match')
    } else {
      navigate('/questions')
    }
  }

  return (
    <Form>
      <h2>Create your account</h2>
      {incorrectData && <IncorrectBadge>{incorrectData}</IncorrectBadge>}
      <input type='text' className='email' placeholder='EMAIL' onChange={event => setEmail(event.target.value)} />
      <br />
      <input
        type='password'
        className='pwd'
        placeholder='PASSWORD'
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <input
        type='password'
        className='pwd'
        placeholder='CONFIRM PASSWORD'
        onChange={event => setConfirmPassword(event.target.value)}
      />

      <NavLink to='/signin' className='link'>
        <HaveAccount>Already have an account?</HaveAccount>
      </NavLink>
      <br />
      <SignUpButton>
        <Button onClick={handleClick}>Sign Up</Button>
      </SignUpButton>
    </Form>
  )
}

export default SignUpForm
