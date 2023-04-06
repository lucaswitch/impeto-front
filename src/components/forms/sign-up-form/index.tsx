'use client'

import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react'
import { PasswordInput, TextInput } from '@/components/inputs'
import { Box, Button, Grid, Typography } from '@mui/material'
import { Form } from '@unform/web'
import { signUpSchema } from '@/components/forms/sign-up-form/schema'
import { getYupErrors } from '@/lib/yup'

type FormData = {
  full_name: string
  email: string
  password: {
    first: string
    seconds: string
  }
}

const INITIAL_DATA: FormData = {
  full_name: '',
  email: '',
  password: {
    first: '',
    seconds: '',
  },
}

/**
 * Formulário de criação de conta.
 * @constructor
 */
export const SignUpForm = forwardRef(function ConfirmDialog(props, ref) {
  const formRef = useRef(null)

  useImperativeHandle(
    ref,
    () => ({
      submit() {
        if (formRef.current) {
          // @ts-ignore
          formRef.current.submit()
        }
      },
    }),
    [formRef],
  )
  /**
   * Quando é realizado o submit no formulário.
   */
  const handleOnSubmit = useCallback(async () => {
    if (formRef.current) {
      // @ts-ignore
      const data = formRef.current.getData()
      for (const attribute in data) {
        if (typeof data[attribute] === 'string') {
          data[attribute] = data[attribute].trim()
        }
      }
      const yupErrors = await getYupErrors(signUpSchema, data)
      if (yupErrors.hasError) {
        // @ts-ignore
        formRef.current.setErrors({ ...yupErrors.errors })
      } else {
        // @ts-ignore
        formRef.current.setErrors({})
      }
    }
  }, [formRef])

  return (
    <Grid>
      <Form ref={formRef} initialData={INITIAL_DATA} onSubmit={handleOnSubmit}>
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
        <Box
          style={{
            gap: 20,
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'inline-flex', flex: 1 }}>
            <PasswordInput name="password.first" label="Senha" />
          </Box>
          <Box sx={{ display: 'inline-flex', flex: 1 }}>
            <PasswordInput name="password.second" label="Confirme" />
          </Box>
        </Box>
        <Box>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            Preencha entre 8 e 30 caracteres, entre eles deve haver ao menos um
            número e uma letra.
          </Typography>
        </Box>
        <Box
          mt={2}
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Button href="/" variant="text">
            Realizar login
          </Button>
          <Box
            style={{
              display: 'flex',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}
          >
            <Button variant="contained" onClick={handleOnSubmit}>
              Criar conta
            </Button>
          </Box>
        </Box>
      </Form>
    </Grid>
  )
})
