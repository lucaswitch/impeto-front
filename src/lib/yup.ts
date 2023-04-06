import { AnyObjectSchema, array, ObjectSchema, ValidationError } from 'yup'

type YupErrors = {
  hasError: boolean
  // @ts-ignore
  errors: Object<string, string>
}

/**
 * Obtém erros do yup.
 * @param schema
 */
export async function getYupErrors(
  schema: ObjectSchema<any>,
  data: any,
): Promise<YupErrors> {
  const yupError: YupErrors = {
    hasError: false,
    errors: [],
  }
  try {
    await schema.validate(data, { abortEarly: false })
  } catch (err) {
    yupError.hasError = true

    if (err instanceof ValidationError) {
      for (const validationError of err.inner) {
        yupError.errors[validationError.path] = validationError.message
      }
    }
  }
  return yupError
}
