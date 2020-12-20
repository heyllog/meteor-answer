import React, { useEffect, useState } from 'react'
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

const SignInForm = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [incorrectData, setIncorrectData] = useState('')

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      navigate('/questions')
    }
  }, [navigate])

  const handleClick = async () => {
    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      setIncorrectData('Incorrect email')
      return
    }

    if (password.length < 6) {
      setIncorrectData('Password should contain at least 6 characters')
      return
    }

    try {
      const response = await fetch('http://localhost:8080/post/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          username: email,
          password,
        }),
      })

      const result = await response.text()

      if (result === 'Success') {
        localStorage.setItem('auth', `Basic ${window.btoa(`${email}:${password}`)}`)
        navigate('/questions')
      } else if (result === 'Error no user') {
        setIncorrectData('Incorrect email or password')
      }
    } catch (e) {
      console.error(e)
      setIncorrectData('Server error')
    }
  }

  return (
    <Form>
      <h2>Continue to Meteor</h2>
      {incorrectData && <IncorrectBadge>{incorrectData}</IncorrectBadge>}
      <input type='email' className='email' placeholder='EMAIL' onChange={event => setEmail(event.target.value)} />
      <br />
      <input
        type='password'
        className='pwd'
        placeholder='PASSWORD'
        onChange={event => setPassword(event.target.value)}
      />
      <NavLink to='/signup' className='link'>
        <HaveAccount>New to Meteor? Create an account.</HaveAccount>
      </NavLink>
      <br />
      <SignUpButton>
        <Button onClick={handleClick}>Sign In</Button>
      </SignUpButton>
    </Form>
  )
}

export default SignInForm
