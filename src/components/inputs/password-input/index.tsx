import { TextField, InputAdornment } from '@mui/material'
import { useState, useRef, useEffect, useCallback } from 'react'
import { useField } from '@unform/core'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

type PasswordInputProps = {
  name: string
  label: string
  helperText?: string
}

/**
 * Text input para senhas.
 * @param name
 * @param label
 * @param helperText
 * @param others
 * @constructor
 */
export function PasswordInput({
  name,
  label,
  helperText = '',
  ...others
}: PasswordInputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  const [visibility, setVisibility] = useState(false)

  /**
   * Quando ocorrer a mudança no valor do text input.
   */
  const handleOnChange = useCallback(
    function (event: any): void {
      // @ts-ignore
      if (inputRef?.current?.value) {
        // @ts-ignore
        inputRef.current.value = event.target?.value || ''
      }
    },
    [inputRef],
  )

  /**
   * Modificador de visibilidade do campo.
   */
  const handleOnToggleVisibility = useCallback(() => {
    setVisibility(!visibility)
  }, [visibility])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: (ref) => {
        return ref.current.value || ''
      },
      setValue: (ref, value) => {
        ref.current.value = value.toString()
      },
      clearValue: (ref) => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])

  let hasError = false
  if (typeof error === 'string' && error.length > 0) {
    hasError = true
    helperText = error
  }
  return (
    <TextField
      margin="normal"
      type={visibility ? 'text' : 'password'}
      ref={inputRef}
      label={label}
      onChange={handleOnChange}
      helperText={helperText}
      error={hasError}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment
            onClick={handleOnToggleVisibility}
            position="start"
            style={{ cursor: 'pointer' }}
          >
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </InputAdornment>
        ),
      }}
      {...others}
    />
  )
}
