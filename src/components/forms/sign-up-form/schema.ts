import { object, string, number, date, InferType } from 'yup'

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
export const signUpSchema = object({
  full_name: string()
    .required('Este campo é requerido.')
    .min(8, 'Mínimo 8 caracteres.')
    .max(100, 'Máximo 30 caracteres.')
    .matches(/^[a-zA-Z]\w{3,100}$/, 'Preencha seu nome completo.'),
  email: string()
    .required('Este campo é requerido.')
    .email('Preencha um email válido.')
    .max(250),
  password: object({
    first: string()
      .matches(
        PASSWORD_REGEX,
        'A senha deve conter ao menos um caractere especial, uma número e uma letra e ter pelo menos 8 caracteres.',
      )
      .required('Este campo é requerido.')
      .min(8)
      .max(30),
    second: string()
      .matches(
        PASSWORD_REGEX,
        'A senha deve conter ao menos um caractere especial, uma número e uma letra e ter pelo menos 8 caracteres.',
      )
      .required('Este campo é requerido.')
      .min(8, 'Mínimo 8 caracteres.')
      .max(30, 'Máximo 30 caracteres.'),
  }),
})

export type User = InferType<typeof signUpSchema>
