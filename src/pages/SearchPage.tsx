import React, { FormEvent, useEffect, useState } from 'react'
import { useRecoilValueLoadable, selector } from 'recoil'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import QuestionPreview from '../components/reusable/QuestionPrewiew'
import Wrapper from '../components/reusable/Wrapper'
import { Colors } from '../utils/types'

const Questions = styled.div`
  h2 {
    padding: 2rem 0;
  }

  @media all and (max-width: 900px) {
    padding: 0 20px;
  }
`

const QuestionTitle = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;

  border: none;
  outline: none;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;

  &::placeholder {
    color: ${({ theme }: { theme: Colors }) => theme.placeholder};
  }
`

const fetchLastQuestions = selector({
  key: 'questionsSearch',
  get: async () => {
    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Authorization', localStorage.getItem('auth') as string)

    const response = await fetch('http://localhost:8080/top10', {
      headers: requestHeaders,
    })
    return response.json()
  },
})

const SearchPage: React.FC = () => {
  const [title, setTitle] = useState<string>('')
  const [questions, setQuestions] = useState<Array<any>>([])
  const { contents, state } = useRecoilValueLoadable(fetchLastQuestions)

  const navigate = useNavigate()
  const theme: any = useTheme()

  useEffect(() => {
    if (state === 'hasValue') {
      const content = [...contents]
      content.reverse()
      setQuestions(content)
    }
  }, [contents, state])

  useEffect(() => {
    if (!localStorage.getItem('auth')) {
      navigate('/')
    }
  }, [navigate])

  const handleSubmit: (e: FormEvent) => void = e => {
    e.preventDefault()

    const content = contents.filter(
      (question: { content: string; shortcontent: string }) =>
        question.content.toLowerCase().includes(title.toLowerCase()) ||
        question.shortcontent.toLowerCase().includes(title.toLowerCase())
    )
    content.reverse()
    setQuestions(content)
  }

  return (
    <Wrapper width='900px'>
      <Questions>
        <h2>Search: </h2>
        <form onSubmit={handleSubmit}>
          <QuestionTitle
            theme={theme}
            value={title}
            placeholder='Search...'
            onChange={({ target }) => setTitle(target.value)}
          />
        </form>

        <h2>Questions: </h2>
        {state === 'hasValue' && questions.map(question => <QuestionPreview key={question.id} question={question} />)}
      </Questions>
    </Wrapper>
  )
}

export default SearchPage
