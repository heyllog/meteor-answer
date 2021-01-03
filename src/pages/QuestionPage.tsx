import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { atom, selectorFamily, useRecoilValueLoadable, useRecoilState } from 'recoil'
import { useLocation, useNavigate } from 'react-router-dom'

import Wrapper from '../components/reusable/Wrapper'
import { Colors } from '../utils/types'

const Form = styled.div`
  h1 {
    padding-left: 30px;
  }

  input {
    display: block;
    height: 60px;
    width: 90%;
    margin: 50px auto;
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

  .answer {
    position: relative;
    border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.placeholder};
    color: ${({ theme }: { theme: Colors }) => theme.formGray};
    font-weight: lighter;
  }
`

const QuestionBox = styled.div`
  margin: 16px auto;
  padding: 30px;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border-radius: 8px;

  h2 {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.primary};
  }

  @media all and (max-width: 910px) {
    margin: 0;
    border-radius: 0;
    border: none;
  }
`

const AnswerBox = styled.h3`
  margin: 16px auto;
  padding: 30px;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border: 1px solid ${({ theme }: { theme: Colors }) => theme.primary};
  border-radius: 8px;

  @media all and (max-width: 910px) {
    margin: 16px;
  }
`

const NoAnswers = styled.h3`
  margin: 30px 0 0 30px;
`

const questionTrigger = atom({
  key: 'questionTrigger',
  default: 0,
})

const fetchQuestion = selectorFamily({
  key: 'currentQuestion',
  get: pathname => async ({ get }) => {
    get(questionTrigger)

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Authorization', localStorage.getItem('auth') as string)

    if (pathname) {
      const response = await fetch(`http://localhost:8080/${pathname.toString().slice(11)}`, {
        headers: requestHeaders,
      })
      return response.json()
    }

    throw new Error('No pathname')
  },
})

const QuestionPage: React.FC = () => {
  const [newAnswer, setNewAnswer] = useState('')

  const navigate = useNavigate()
  const { pathname } = useLocation()
  const theme: any = useTheme()

  const { contents, state } = useRecoilValueLoadable(fetchQuestion(pathname))
  const [trigger, setTrigger] = useRecoilState(questionTrigger)

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Authorization', localStorage.getItem('auth') as string)
    requestHeaders.set('Content-Type', 'application/json;charset=utf-8')

    try {
      await fetch(`http://localhost:8080/post/${pathname.slice(11)}/add/`, {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          information: newAnswer,
        }),
      })

      setTrigger(trigger + 1)
      setNewAnswer('')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <Wrapper width='700px'>
      <QuestionBox theme={theme}>
        <h2>{contents.shortcontent}</h2>
        <p>{contents.content}</p>
      </QuestionBox>
      <Form theme={theme}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='answer'
            placeholder='Write your answer...'
            value={newAnswer}
            onChange={({ target }) => setNewAnswer(target.value)}
          />
        </form>

        <h1>Answers: </h1>
        {state === 'hasValue' &&
          (contents.list.length > 0 ? (
            contents.list.map((answer: { information: React.ReactNode }) => (
              <AnswerBox theme={theme}>{answer.information}</AnswerBox>
            ))
          ) : (
            <NoAnswers>There is no answers yet... Be first!</NoAnswers>
          ))}
      </Form>
    </Wrapper>
  )
}

export default QuestionPage
