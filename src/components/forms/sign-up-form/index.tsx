'use client'
import { Box } from '@mui/material'
import { useCallback, useRef } from 'react'
import { Form } from '@unform/web'
import { PasswordInput, TextInput } from '@/components/inputs'

/**
 * Formulário de criação de conta.
 * @constructor
 */
export function SignUpForm() {
  const formRef = useRef(null)

  /**
   * Quando é realizado o submit no formulário.
   */
  const handleOnSubmit = useCallback(() => {}, [])

  return (
    <Box>
      <Form ref={formRef} onSubmit={handleOnSubmit}>
        <Box>
          <TextInput name="full_name" label="Nome completo" />
        </Box>
        <Box>
          <TextInput
            name="email"
            label="Email"
            helperText="Preencha o seu melhor email :)"
          />
        </Box>
        <Box sx={{ display: 'inline-flex' }}>
          <Box sx={{ display: 'inline' }}>
            <PasswordInput name="password1" label="Senha" />
          </Box>
          <Box sx={{ display: 'inline' }}>
            <PasswordInput name="password2" label="Confirme" />
          </Box>
        </Box>
      </Form>
    </Box>
  )
}
