'use client'

import { useState, useCallback, useId } from 'react'
import { Popover, Box, Typography, Divider } from '@mui/material'
import { AccountAvatar } from '@/components/images'
import { LogoutButton } from '@/components/buttons'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #fff',
  borderRadius: '6px',
  boxShadow: 0,
  p: 1,
}
/**
 * Menu de conta.
 * @param children
 * @constructor
 */
export function AccountMenu({ children }: { children: any }) {
  const [visible, setVisible] = useState(false)
  const childrenWrapperId = useId()

  /**
   * Abre modal.
   */
  const handleOnOpen = useCallback(() => {
    setVisible(true)
  }, [])

  /**
   * Fecha modal.
   */
  const handleOnClose = useCallback(() => {
    setVisible(false)
  }, [])

  /**
   * Lida com o efeito toggle
   */
  const handleOnToggle = useCallback(() => {
    setVisible(!visible)
  }, [visible])

  return (
    <div onClick={handleOnToggle}>
      <div id={childrenWrapperId}>{children}</div>
      <Popover
        anchorEl={document.getElementById(childrenWrapperId)}
        open={visible}
        onClose={handleOnClose}
        elevation={2}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box
          sx={{
            p: 1,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#fff',
            borderRadius: 6,
          }}
        >
          <Box sx={{ display: 'inline-flex' }}>
            <Box p={1}>
              <AccountAvatar id="10" width={64} height={64} />
            </Box>
            <Box p={1}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Fulan Borges
              </Typography>
              <Typography id="modal-modal-title" variant="body2" component="h2">
                fulano@gmail.com
              </Typography>
            </Box>
          </Box>
          <Divider />
          <Box mt={1}>
            <LogoutButton />
          </Box>
        </Box>
      </Popover>
    </div>
  )
}
