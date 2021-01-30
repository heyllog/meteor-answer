import React, { useEffect, useState } from 'react'
import { useTheme } from '@emotion/react'
import { NavLink, useNavigate } from 'react-router-dom'

import Button from './reusable/Button'
import Form from './reusable/Form'
import SignButton from './reusable/SignButton'
import HaveAccount from './reusable/HaveAccount'
import IncorrectBadge from './reusable/IncorrectBadge'

const SignUpForm: React.FC = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [incorrectData, setIncorrectData] = useState('')
  const theme: any = useTheme()

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      navigate('/questions')
    }
  }, [navigate])

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault()

    if (!/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(email)) {
      setIncorrectData('Incorrect email')
      return
    }

    if (password.length < 6) {
      setIncorrectData('Password should contain at least 6 characters')
      return
    }

    if (password !== confirmPassword) {
      setIncorrectData('Passwords do not match')
      return
    }

    try {
      const requestHeaders: HeadersInit = new Headers()
      requestHeaders.set('Content-Type', 'application/json;charset=utf-8')

      const response = await fetch('http://localhost:8080/post/register', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          username: email,
          password,
        }),
      })

      const result = await response.text()

      if (result === 'Success') {
        localStorage.setItem('auth', `Basic ${window.btoa(`${email}:${password}`)}`)
        navigate('/questions')
      } else if (result === 'Already exist') {
        setIncorrectData('User already exist')
      }
    } catch (e) {
      console.error(e)
      setIncorrectData('Server error')
    }
  }

  return (
    <Form theme={theme} onSubmit={handleSubmit}>
      <h2>Create your account</h2>
      {incorrectData && <IncorrectBadge theme={theme}>{incorrectData}</IncorrectBadge>}
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
        <HaveAccount theme={theme}>Already have an account?</HaveAccount>
      </NavLink>
      <br />
      <SignButton>
        <Button onClick={handleSubmit}>Sign Up</Button>
      </SignButton>
    </Form>
  )
}

export default SignUpForm
