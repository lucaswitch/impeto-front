'use client'
import './globals.css'
import { Toolbar, Divider, Box, AppBar } from '@mui/material'
import Image from 'next/image'
import { MainMenu } from '@/components/menu'
import { AccountAvatar } from '@/components/images'
import { useCallback, useEffect, useState } from 'react'
import { AccountMenu } from '@/components/menu/account-menu'

export default function MyAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [elevation, setElevation] = useState(0)

  /**
   * Quando o browser é scrollado.
   */
  const handleOnWindowScroll = useCallback(() => {
    const isOnTop = window.scrollY === 0
    if (isOnTop) {
      setElevation(0)
    } else {
      setElevation(1)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('load', handleOnWindowScroll)
    window.addEventListener('scroll', handleOnWindowScroll)
    return () => {
      window.removeEventListener('scroll', handleOnWindowScroll)
      window.removeEventListener('load', handleOnWindowScroll)
    }
  }, [handleOnWindowScroll])

  return (
    <section className="main">
      <section className="appbar">
        <AppBar
          color="transparent"
          elevation={elevation}
          style={{ backgroundColor: '#fff' }}
        >
          <Toolbar>
            <Image
              src={'/impeto-symbol-gray.svg'}
              alt="ímpeto logo"
              width={20}
              height={32}
            />
            <div style={{ marginLeft: 'auto' }}>
              <AccountMenu>
                <AccountAvatar id={10} />
              </AccountMenu>
            </div>
          </Toolbar>
          <Divider />
        </AppBar>
      </section>
      <section className="content">
        <div className="menu">
          <MainMenu />
        </div>
        <div className="inner">
          <Box maxWidth="md">{children}</Box>
        </div>
      </section>
    </section>
  )
}
