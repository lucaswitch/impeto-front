'use client'
import './globals.css'
import { Box, Grid } from '@mui/material'

/**
 * Layout de saida.
 * @param children
 * @constructor
 */
export default function SignOutLayout({
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
