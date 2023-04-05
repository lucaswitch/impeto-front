'use client'

import { ReactElement, useCallback } from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import PersonPinOutlinedIcon from '@mui/icons-material/PersonPinOutlined'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined'
import styles from './index.module.css'
import { Tabs, Tab, Box, Divider } from '@mui/material'
import { usePathname } from 'next/navigation'

/**
 * Menu principal da aplicação.
 * @constructor
 */
export function MainMenu() {
  const pathname = usePathname()
  /**
   * Renderiza item da lista.
   */
  const renderListItem = useCallback(({ label, icon, divider, href }: Item) => {
    const selected = pathname === href

    return (
      <div key={label}>
        {divider && (
          <Box mt={1} mb={1}>
            <Divider />
          </Box>
        )}
        <ListItem
          disablePadding
          selected={selected}
          style={{ borderRadius: 40 }}
        >
          <ListItemButton href={href}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={label} />
          </ListItemButton>
        </ListItem>
      </div>
    )
  }, [])

  /**
   * Renderiza tab da lista.-
   */
  const renderTabItem = useCallback(({ label }: Item) => {
    return <Tab label={label} />
  }, [])

  return (
    <div>
      <div>
        <Box
          sx={{
            display: {
              xs: 'flex',
              sm: 'flex',
              md: 'none',
              lg: 'none',
              xl: 'none',
            },
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          {/*
           <Tabs
            aria-label="navigation options"
            centered={true}
            variant="scrollable"
          >
            {ITEMS.map(renderTabItem)}
          </Tabs>
          */}
        </Box>
      </div>
      <div className={styles.menu}>
        <Box
          pl={1}
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
          }}
        >
          <List>{ITEMS.map(renderListItem)}</List>
        </Box>
      </div>
    </div>
  )
}

type Item = {
  icon: ReactElement
  label: string
  divider?: boolean
  href: string
}

const ITEMS: Item[] = [
  {
    href: '/my-account/',
    icon: <AccountCircleOutlinedIcon />,
    label: 'Principal',
  },
  {
    href: '/my-account/profile/',
    icon: <PersonPinOutlinedIcon />,
    label: 'Informações pessoais',
  },
  {
    href: '/my-account/privacy-and-security/',
    icon: <ShieldOutlinedIcon />,
    label: 'Privacidade e Segurança',
  },
  {
    href: '/my-account/about/',
    icon: <InfoOutlinedIcon />,
    label: 'Sobre',
    divider: true,
  },
]
