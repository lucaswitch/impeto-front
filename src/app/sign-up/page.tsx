'use client'
import {
  Card,
  CardContent,
  Typography,
  Box,
  CardActions,
  Button,
  Divider,
  Grid,
} from '@mui/material'
import { SignUpForm } from '@/components/forms'
import { Row } from '@/components/containers'
import Image from 'next/image'

/**
 * Pagina de criação de conta.
 * @constructor
 */
export default function SignUp() {
  return (
    <section>
      <Box p={2}>
        <Row>
          <Image
            src="/impeto-symbol-gray.svg"
            alt="impeto-logo"
            width={32}
            height={48}
          />
        </Row>
        <Typography variant="h5" mt={1} gutterBottom>
          Criar sua conta Ímpeto
        </Typography>
        <SignUpForm />
      </Box>
    </section>
  )
}
