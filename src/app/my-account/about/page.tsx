'use client'
import { Box, Divider, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import { CenteredColumn } from '@/components/containers'

/**
 * Página de conta.
 * @constructor
 */
export default function About() {
  return (
    <Box p={2}>
      <CenteredColumn>
        <>
          <Typography variant="h5" align="center" p={2}>
            Sobre
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="text.secondary"
            paragraph
          >
            A Ímpeto Tecnologia é uma empresa brasileira que atua no
            desenvolvimento de equipamentos com foco em análises metabólicas
            tanto para o mercado esportivo como para o mercado médico
            hospitalar. A empresa surgiu em 2021 e é formada por especialistas
            em engenharia eletrônica, desenvolvimento de software embarcado,
            saúde humana e fisiologia do exercício.
          </Typography>
        </>
      </CenteredColumn>

      <CenteredColumn>
        <>
          <Image
            src="/impeto-logo.svg"
            alt="impeto-logo"
            width={42}
            height={64}
          />
          <Typography
            variant="caption"
            align="center"
            display="block"
            color="text.secondary"
            gutterBottom
          >
            Desenvolvido por Ímpeto Tecnologia&reg; 2023.
          </Typography>
          <Box>
            <Typography
              variant="caption"
              align="center"
              display="block"
              color="text.secondary"
              gutterBottom
            >
              Consulte nossas condições de vendas: <b>+55 61 9 9668 5487</b> ou
              através do email: <b>contato@fitcheck.com.br</b>.
            </Typography>
          </Box>
        </>
      </CenteredColumn>
    </Box>
  )
}
