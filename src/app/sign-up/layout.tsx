'use client'
import { Box, Grid } from '@mui/material'

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
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Grid justifyContent="center" alignItems="center">
          <Grid item>{children}</Grid>
        </Grid>
      </Box>
    </section>
  )
}
