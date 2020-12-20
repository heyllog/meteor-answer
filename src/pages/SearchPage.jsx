import React, { useEffect, useState } from 'react'
import { useRecoilValueLoadable, selector } from 'recoil'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled'

import QuestionPreview from '../components/reusable/QuestionPrewiew'
import Wrapper from '../components/reusable/Wrapper'
import theme from '../themes/theme'

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
  border-bottom: 1px solid ${theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;
`

const fetchLastQuestions = selector({
  key: 'questionsSearch',
  get: async () => {
    const response = await fetch('http://localhost:8080/top10', {
      headers: {
        Authorization: localStorage.getItem('auth'),
      },
    })
    return response.json()
  },
})

const SearchPage = () => {
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState([])

  const navigate = useNavigate()
  const { contents, state } = useRecoilValueLoadable(fetchLastQuestions)

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

  const handleSubmit = e => {
    e.preventDefault()

    const content = contents.filter(
      question =>
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
          <QuestionTitle value={title} placeholder='Search...' onChange={({ target }) => setTitle(target.value)} />
        </form>

        <h2>Questions: </h2>
        {state === 'hasValue' && questions.map(question => <QuestionPreview key={question.id} question={question} />)}
      </Questions>
    </Wrapper>
  )
}

export default SearchPage
