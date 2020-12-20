import React, { useState } from 'react'
import styled from '@emotion/styled'
import theme from '../themes/theme'

const AskForm = styled.div`
  display: flex;
  flex-direction: column;
`

const QuestionTitle = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;

  border: none;
  outline: none;
  border-bottom: 1px solid ${theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;
`

const QuestionBody = styled.textarea`
  min-height: 100px;
  padding: 1rem;

  outline: none;
  resize: none;
  border: none;
  border-bottom: 1px solid ${theme.primary};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const QuestionAsk = ({ trigger, setTrigger }) => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      await fetch('http://localhost:8080/post/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('auth'),
        },
        body: JSON.stringify({
          shortcontent: title,
          content: question,
        }),
      })

      setTitle('')
      setQuestion('')
      setTrigger(trigger + 1)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <AskForm>
      <h2>Ask something:</h2>
      <Form onSubmit={handleSubmit}>
        <QuestionTitle value={title} placeholder='Title...' onChange={({ target }) => setTitle(target.value)} />
        <QuestionBody value={question} placeholder='Question...' onChange={({ target }) => setQuestion(target.value)} />
      </Form>
    </AskForm>
  )
}

export default QuestionAsk
