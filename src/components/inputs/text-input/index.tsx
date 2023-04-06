import TextField from '@mui/material/TextField'
import { useRef, useEffect, useCallback } from 'react'
import { useField } from '@unform/core'

type TextInputProps = {
  name: string
  label: string
  helperText?: string
}

/**
 * Text input.
 * @param name
 * @param label
 * @param helperText
 * @param others
 * @constructor
 */
export function TextInput({
  name,
  label,
  helperText = '',
  ...others
}: TextInputProps) {
  const inputRef = useRef(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)

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

  useEffect(() => {
    if (inputRef.current) {
      // @ts-ignore
      inputRef.current.value = defaultValue
    }
  }, [inputRef, defaultValue])

  let hasError = false
  console.log('error', error)
  if (typeof error === 'string' && error.length > 0) {
    hasError = true
    helperText = error
  }
  return (
    <TextField
      ref={inputRef}
      label={label}
      margin="normal"
      type="text"
      onChange={handleOnChange}
      helperText={helperText}
      error={hasError}
      fullWidth
      {...others}
    />
  )
}
