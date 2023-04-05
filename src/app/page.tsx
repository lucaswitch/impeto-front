'use client'

import Image from 'next/image'
import { Roboto } from 'next/font/google'
import { SignInForm } from '@/components/forms'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { Copyright } from '../components/misc'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export default function Home() {
  return (
    <main>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src={'./impeto-logo.svg'}
            alt="ímpeto logo"
            width={300}
            height={140}
          />
          <SignInForm />
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </main>
  )
}
