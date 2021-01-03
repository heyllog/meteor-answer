import React, { useState } from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

import { Colors } from '../utils/types'

const AskForm = styled.div`
  display: flex;
  flex-direction: column;
`

const QuestionTitle = styled.input`
  margin-bottom: 1rem;
  padding: 1rem;

  border: none;
  outline: none;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.placeholder};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;

  &::placeholder {
    color: ${({ theme }: { theme: Colors }) => theme.placeholder};
  }
`

const QuestionBody = styled.textarea`
  min-height: 100px;
  padding: 1rem;

  outline: none;
  resize: none;
  border: none;
  background-color: ${({ theme }: { theme: Colors }) => theme.background};
  border-bottom: 1px solid ${({ theme }: { theme: Colors }) => theme.placeholder};

  font-family: 'Comfortaa', sans-serif;
  font-size: 1.2rem;

  &::placeholder {
    color: ${({ theme }: { theme: Colors }) => theme.placeholder};
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
`

const QuestionAsk: React.FC<QuestionAskProps> = ({ trigger, setTrigger }) => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const theme: any = useTheme()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const requestHeaders: HeadersInit = new Headers()
    requestHeaders.set('Authorization', localStorage.getItem('auth') as string)
    requestHeaders.set('Content-Type', 'application/json;charset=utf-8')

    try {
      await fetch('http://localhost:8080/post/create', {
        method: 'POST',
        headers: requestHeaders,
        body: JSON.stringify({
          shortcontent: title,
          content: question,
        }),
      })

      setTitle('')
      setQuestion('')
      setTrigger(trigger + 1)
    } catch (error) {
      console.error(error)
    }
  }

  const onEnterPress = (e: { keyCode: number; shiftKey: boolean; preventDefault: () => void }) => {
    if (e.keyCode === 13 && e.shiftKey === false) {
      handleSubmit(e)
    }
  }

  return (
    <AskForm>
      <h2>Ask something:</h2>
      <Form onSubmit={handleSubmit}>
        <QuestionTitle
          theme={theme}
          value={title}
          placeholder='Title...'
          onChange={({ target }) => setTitle(target.value)}
        />
        <QuestionBody
          theme={theme}
          value={question}
          placeholder='Question...'
          onChange={({ target }) => setQuestion(target.value)}
          onKeyDown={onEnterPress}
        />
      </Form>
    </AskForm>
  )
}

type QuestionAskProps = {
  trigger: number
  setTrigger: any
}

export default QuestionAsk
