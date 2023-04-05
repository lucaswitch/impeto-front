'use client'
import { Box, Typography } from '@mui/material'
import { FitcheckCard, FusionCard, MetabolicCard } from '@/components/cards'

/**
 * Página de conta.
 * @constructor
 */
export default function MyAccount() {
  return (
    <Box mt={2}>
      <Typography variant="h5" align="center" p={2}>
        Bem vindo, Fulano Borges
      </Typography>
      <Typography
        color="text.secondary"
        variant="body2"
        align="center"
        paragraph
      >
        Aqui você encontra informações e produtos assinalados na sua conta
        ímpeto&reg;
      </Typography>
      <Box
        sx={{
          p: 1,
          m: 1,
          flexDirection: 'row',
        }}
      >
        <Box mt={2}>
          <FitcheckCard />
        </Box>
        <Box mt={2}>
          <FusionCard />
        </Box>
        <Box mt={2}>
          <MetabolicCard />
        </Box>
      </Box>
    </Box>
  )
}
