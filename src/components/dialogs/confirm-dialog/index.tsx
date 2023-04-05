import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Button,
} from '@mui/material'
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'

type Button = {
  label: string
  handler: () => void
}

type Props = {
  title: string
  text: string
  buttons: Button[]
}

/**
 * Dialogo de confirmação.
 * @constructor
 */
export const ConfirmDialog = forwardRef(function ConfirmDialog(
  { title, text, buttons = [] }: Props,
  ref,
) {
  const [visible, setVisible] = useState(false)

  useImperativeHandle(
    ref,
    () => ({
      show() {
        setVisible(true)
      },
      hide() {
        setVisible(false)
      },
    }),
    [],
  )

  /**
   * Fecha dialogo.
   */
  const handleOnClose = useCallback(() => {
    setVisible(false)
  }, [])

  /**
   * Abre dialogo.
   */
  const handleOnOpen = useCallback(() => {
    setVisible(true)
  }, [])

  /**
   * Renderiza o botão.
   */
  const renderButton = useCallback(function (
    { label, handler }: Button,
    i: number,
  ) {
    return (
      <Button onClick={handler} key={i}>
        {label}
      </Button>
    )
  },
  [])

  return (
    <Dialog
      open={visible}
      onClose={handleOnClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {text}
        </DialogContentText>
      </DialogContent>
      {buttons?.length > 0 && (
        <DialogActions>{buttons.map(renderButton)}</DialogActions>
      )}
    </Dialog>
  )
})
