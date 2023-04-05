'use client'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { TextInput } from '@/components/inputs'
import { Form } from '@unform/web'
import React, { useCallback, useRef } from 'react'

/**
 * Formulário de login.
 * @constructor
 */
export function SignInForm() {
  const formRef = useRef(null)
  const handleOnSubmit = useCallback((data: any) => {}, [])

  return (
    <Box component="div" sx={{ mt: 1 }}>
      <Form
        ref={formRef}
        onSubmit={handleOnSubmit}
        initialData={{ username: '', password: '' }}
      >
        <TextInput name="username" label="Email" />
        <TextInput name="password" label="Senha" />
        <Button
          href="/my-account"
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Entrar
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="/recover" variant="body2">
              Esqueci minha senha?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              Não tem uma conta? Crie uma conta
            </Link>
          </Grid>
        </Grid>
      </Form>
    </Box>
  )
}
