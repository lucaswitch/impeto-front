'use client'
import { Container, Box, Grid } from '@mui/material'

/**
 * Layout de recuperação.
 * @param children
 * @constructor
 */
export default function RecoverAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className="main">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid justifyContent="center" alignItems="center">
          <Grid item>{children}</Grid>
        </Grid>
      </Grid>
    </section>
  )
}
