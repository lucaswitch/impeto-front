'use client'
import { Card, CardContent, Typography, Box } from '@mui/material'
import { SignUpForm } from '@/components/forms'
import Image from 'next/image'
import { Row } from '@/components/containers'

/**
 * Pagina de criação de conta.
 * @constructor
 */
export default function SignUp() {
  return (
    <section>
      <Card sx={{ minWidth: 480, maxWidth: 720 }} variant="outlined">
        <CardContent>
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
        </CardContent>
      </Card>
    </section>
  )
}
