'use client'
import { Button, IconButton, Link } from '@mui/material'

/**
 * Botão de logout, responsável por realizar o logout do usuário do sistema.
 * @constructor
 */
export function LogoutButton() {
  return (
    <Button href="/sign-out" size="small">
      Sair
    </Button>
  )
}
