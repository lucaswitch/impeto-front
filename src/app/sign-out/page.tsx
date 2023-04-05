'use client'
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
} from '@mui/material'
import Image from 'next/image'
import { CenteredColumn } from '@/components/containers'

/**
 * Pagina de logout
 * @constructor
 */
export default function SignOut() {
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
            Realizar logout
          </Typography>
          <Typography variant="h5" component="div"></Typography>
          <Typography variant="body2">
            Ao realizar o logout você será desconectado de todos os produtos
            Fusion, Fitcheck e Metabolic porém você poderá conectar novamente
            utilizando suas credênciais.
          </Typography>
        </CardContent>
        <CardActions>
          <Box style={{ flex: 1 }}>
            <Button href="/" size="small">
              Realizar logout
            </Button>
          </Box>
          <Box>
            <Button href="/my-account" size="small" variant="contained">
              Voltar
            </Button>
          </Box>
        </CardActions>
      </Card>
    </section>
  )
}
