import * as yup from 'yup'

export interface ISocietySchema {
  id?: string
  name: string
  description?: string
}

export const SocietySchema = yup.object().shape({
  name: yup.string().required('Society name required'),
  description: yup.string()
})
