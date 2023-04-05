'use client'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
} from '@mui/material'
import Image from 'next/image'
import { CenteredColumn } from '@/components/containers'

/**
 * Pagina de confirmação de email.
 * @constructor
 */
export default function Email() {
  return (
    <section>
      <Card sx={{ minWidth: 360, maxWidth: 460 }} variant="outlined">
        <CardContent>
          <CenteredColumn>
            <Image
              src="../../impeto-logo.svg"
              alt="impeto-logo"
              width={120}
              height={86}
            />
          </CenteredColumn>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Recuperar conta
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2" color="text.secondary">
            Você está com dificuldades de acessar sua conta, mas para sua
            segurança precisamos verificar a sua identidade no nosso sistema,
            escolhe abaixo uma das maneiras que gostaria de recuperar:
          </Typography>
        </CardContent>
        <CardActions>
          <Box style={{ flex: 1 }}>
            <Button href="/" size="small" variant="text">
              Voltar
            </Button>
          </Box>
          <Box>
            <Button href="/recover/email" size="small" variant="contained">
              Confirmação de Email
            </Button>
          </Box>
        </CardActions>
      </Card>
    </section>
  )
}
