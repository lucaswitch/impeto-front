'use client'
import './globals.css'
import {
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Box,
} from '@mui/material'
import { ParamAndValue } from '@/components/misc'
import Image from 'next/image'
import { AccountAvatar } from '@/components/images'
import { CenteredColumn } from '@/components/containers'

/**
 * Perfil da conta.
 * @constructor
 */
export default function Profile() {
  return (
    <section className="main">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <CenteredColumn
          style={{
            width: '90%',
            marginLeft: 'auto',
            marginRight: 'auto',
            padding: '1rem',
          }}
        >
          <>
            <Image
              src="/impeto-logo.svg"
              alt="impet-logo"
              width={280}
              height={140}
            />
            <Typography variant="h5" color="text.primary" mt={2}>
              Informações Pessoais
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              style={{ textAlign: 'center' }}
              color="text.secondary"
            >
              Aqui reunimos as informações relacionadas ao seu perfil ímpeto e
              modifica-las pode impactar nos demais produtos oferecidos.
            </Typography>
          </>
        </CenteredColumn>
        <Box p={2} style={{ width: '90%' }}>
          <Box>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Informações Pessoais
                </Typography>
                <ParamAndValue
                  param="Imagem de Perfil"
                  value={
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <AccountAvatar id={10} />
                    </Box>
                  }
                />
                <Divider />
                <ParamAndValue param="Nome completo" value="Fulano de Tal" />
                <Divider />
                <ParamAndValue
                  param="Email"
                  value="lucas.developing@gmail.com"
                />
                <Divider />
                <ParamAndValue param="Telefone" value="(61) 9  8219 2770" />
                <Divider />
              </CardContent>
              <CardActions
                style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
              >
                <Button
                  href="/my-account/profile/update-data"
                  variant="text"
                  size="small"
                >
                  Editar
                </Button>
              </CardActions>
            </Card>
          </Box>
          <Box mt={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Informações da minha Empresa
                </Typography>
                <ParamAndValue
                  param="Nome Fantasia"
                  value="Empresa muito legal"
                />
                <Divider />
                <ParamAndValue param="Telefone" value="(61) 9 8219 2770" />
                <Divider />
                <ParamAndValue param="CNPJ" value="1234567890" />
                <Divider />
                <ParamAndValue param="CEP" value="1234590" />
                <Divider />
              </CardContent>
            </Card>
          </Box>
          <Box mt={2}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Meu endereço
                </Typography>
                <ParamAndValue param="Pais" value="Brazil" />
                <Divider />
                <ParamAndValue param="Estado" value="Distrito Federal" />
                <Divider />
                <ParamAndValue param="Cidade" value="Brasília" />
                <Divider />
                <ParamAndValue param="Complemento" value="..." />
                <Divider />
                <ParamAndValue param="CEP" value="72182-2" />
              </CardContent>
              <CardActions
                style={{ alignItems: 'flex-end', justifyContent: 'flex-end' }}
              >
                <Button
                  href="/my-account/profile/update-address"
                  variant="text"
                  size="small"
                >
                  Editar
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>
      </Grid>
    </section>
  )
}
