import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { atom, selectorFamily, useRecoilValueLoadable, useRecoilState } from 'recoil'
import { useLocation, useNavigate } from 'react-router-dom'

import theme from '../themes/theme'
import Wrapper from '../components/reusable/Wrapper'

const AnswersBox = styled.div`
  h1 {
    padding-left: 30px;
  }

  input {
    display: block;
    height: 60px;
    width: 90%;
    margin: 50px auto;
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
`

const QuestionBox = styled.div`
  margin: 16px auto;
  padding: 30px;
  background-color: #fff;
  border-radius: 8px;

  h2 {
    margin-bottom: 16px;
    padding-bottom: 8px;
    border-bottom: 1px solid ${theme.primary};
    cursor: pointer;
    transition: 0.3s color;

    &:hover {
      color: ${theme.orange};
    }
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
  background-color: #fff;
  border: 1px solid ${theme.primary};
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
    const response = await fetch(`http://localhost:8080/${pathname.slice(11)}`, {
      headers: {
        Authorization: localStorage.getItem('auth'),
      },
    })
    return response.json()
  },
})

const QuestionPage = () => {
  const [newAnswer, setNewAnswer] = useState('')

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const { contents, state } = useRecoilValueLoadable(fetchQuestion(pathname))
  const [trigger, setTrigger] = useRecoilState(questionTrigger)

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await fetch(`http://localhost:8080/post/${pathname.slice(11)}/add/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('auth'),
        },
        body: JSON.stringify({
          information: newAnswer,
        }),
      })

      setTrigger(trigger + 1)
      setNewAnswer('')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Wrapper width='700px'>
      <QuestionBox>
        <h2>{contents.shortcontent}</h2>
        <p>{contents.content}</p>
      </QuestionBox>
      <AnswersBox>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='email'
            placeholder='Write your answer...'
            value={newAnswer}
            onChange={({ target }) => setNewAnswer(target.value)}
          />
        </form>

        <h1>Answers: </h1>
        {state === 'hasValue' &&
          (contents.list.length > 0 ? (
            contents.list.map(answer => <AnswerBox>{answer.information}</AnswerBox>)
          ) : (
            <NoAnswers>There is no answers yet... Be first!</NoAnswers>
          ))}
      </AnswersBox>
    </Wrapper>
  )
}

export default QuestionPage
