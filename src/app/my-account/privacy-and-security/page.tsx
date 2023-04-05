'use client'
import Image from 'next/image'
import {
  Typography,
  Grid,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  FormControl,
  FormGroup,
} from '@mui/material'
import { Share, Support, TermOfUse } from '@/components/privacy'

/**
 * Página de configuração de privacidade.
 * @constructor
 */
export default function PrivacyAndSecurity() {
  return (
    <section className="main">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src="/impeto-logo.svg"
          alt="impet-logo"
          width={280}
          height={140}
        />
        <Typography variant="h5" color="text.primary" mt={2}>
          Privacidade & Segurança
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ textAlign: 'center' }}
          color="text.secondary"
        >
          Aqui você define as configurações de privacidade ideais para sua
          conta.
        </Typography>
        <Box p={2} style={{ width: '90%' }}>
          <Card sx={{ minWidth: 275 }} variant="outlined">
            <CardContent>
              <Share />
              <Support />
              <TermOfUse />
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </section>
  )
}
