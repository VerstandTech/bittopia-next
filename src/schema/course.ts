import * as yup from 'yup'

export interface ICourseSchema {
  id?: string
  name: string
  description: string
  thumbnail?: string
}

export const CourseSchema = yup.object().shape({
  name: yup.string().required('Course name required'),
  description: yup.string().required('Course description required'),
  thumbnail: yup.string()
})
