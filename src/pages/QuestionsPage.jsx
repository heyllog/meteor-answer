import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValueLoadable, selector, atom } from 'recoil'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import { questionsAtom } from '../atoms/questions'
import QuestionAsk from '../components/QuestionAsk'
import QuestionPreview from '../components/reusable/QuestionPrewiew'
import Wrapper from '../components/reusable/Wrapper'

const Questions = styled.div`
  h2 {
    padding: 2rem 0;
  }

  @media all and (max-width: 900px) {
    padding: 0 20px;
  }
`

const lastQuestionsTrigger = atom({
  key: 'lastQuestionsTrigger',
  default: 0,
})

const fetchLastQuestions = selector({
  key: 'lastQuestions',
  get: async ({ get }) => {
    get(lastQuestionsTrigger)
    const response = await fetch('http://localhost:8080/top10', {
      headers: {
        Authorization: localStorage.getItem('auth'),
      },
    })
    return response.json()
  },
})

const QuestionsPage = () => {
  const navigate = useNavigate()
  const [questions, setQuestions] = useRecoilState(questionsAtom)
  const { contents, state } = useRecoilValueLoadable(fetchLastQuestions)
  const [trigger, setTrigger] = useRecoilState(lastQuestionsTrigger)

  useEffect(() => {
    if (state === 'hasValue' && contents.length > 0) {
      const content = [...contents]
      content.reverse()
      setQuestions(content)
    }
  }, [contents, state, setQuestions])

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/')
    }
  }, [navigate])

  return (
    <Wrapper width='900px'>
      <Questions>
        <QuestionAsk trigger={trigger} setTrigger={setTrigger} />

        <h2>Or read last questions: </h2>
        {state === 'hasValue' && questions.map(question => <QuestionPreview key={question.id} question={question} />)}
      </Questions>
    </Wrapper>
  )
}

export default QuestionsPage
