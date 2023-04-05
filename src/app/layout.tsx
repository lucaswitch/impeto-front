'use client'
import './globals.css'

import { ThemeProvider } from '@mui/material/styles'
import { theme } from '@/lib/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
import { Box, Divider } from '@mui/material'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
          </PersistGate>
          <footer>
            <Divider />
            <Box p={2}></Box>
          </footer>
        </Provider>
      </body>
    </html>
  )
}
