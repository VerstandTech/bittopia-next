import * as yup from 'yup'
import {TypeFromShape} from "yup";

export interface IQuestionOptionSchema {
  id?: string
  content: string
}

export interface IQuestionSchema {
  id?: string
  content: string
  options: IQuestionOptionSchema[]
  answer: string
}

export const QuestionOptionSchema = yup.object<TypeFromShape<any, IQuestionOptionSchema>>().shape({
  content: yup.string().required('Answer option content required')
})

export const QuestionSchema = yup.object<TypeFromShape<any, IQuestionSchema>>().shape({
  content: yup.string().required('Question content required'),
  options: yup.array().of(QuestionOptionSchema)
})
