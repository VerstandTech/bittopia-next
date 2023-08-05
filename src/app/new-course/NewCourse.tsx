import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import { useRedirectUnauthenticated } from '@/hooks/useRedirectUnauthenticated/useRedirectUnauthenticated'
import BaseTemplate from '@/layouts/BaseTemplate'
import MainService from '@/services/MainService'
import { useAuthCredentials } from '@/store/AuthCredentials/AuthCredentials'
import {
  useMainStore,
  type Course,
  type MainState,
  type Society
} from '@/store/useMainStore/useMainStore'
import { sentenceCase } from 'change-case'
import classNames from 'classnames'
import { useFormik } from 'formik'
import { useState, type FC } from 'react'
import { v4 } from 'uuid'
import * as yup from 'yup'

const CourseSchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  society: yup.string().required(),
  ownerAddress: yup.string().required(),
  profiles: yup.array()
})

export const NewCourse: FC = () => {
  const { web3Address } = useAuthCredentials()
  const { data: queryData, refetch } = useQueryData()
  const { setData } = useMainStore()
  const [isLoading, setIsLoading] = useState(false)

  const societies =
    queryData !== undefined && Object.values(queryData.data.societies)

  const formik = useFormik<Course & { society: string }>({
    initialValues: {
      name: '',
      description: '',
      ownerAddress: web3Address,
      society: '',
      profiles: [web3Address]
    },
    enableReinitialize: true,
    validationSchema: CourseSchema,
    onSubmit: (values): void => {
      const uuid = v4()
      const data = queryData?.data as MainState

      const dataSet = {
        ...data,
        societies: {
          ...data.societies,
          ...{
            [values.society]: {
              ...data.societies[values.society],
              courses: [
                ...(data.societies[values.society].courses as Course[]),
                { ...values, ...{ id: uuid } }
              ]
            } satisfies Society
          }
        }
      }

      setIsLoading(true)

      MainService.mutate(dataSet)
        .then(result => {
          setIsLoading(false)
          setData(result.data)
          void refetch()
          formik.resetForm()
        })
        .catch(err => {
          setIsLoading(false)
          console.log(err)
        })
    }
  })

  useRedirectUnauthenticated()

  return (
    <BaseTemplate>
      <h1 className={'mb-8 text-2xl font-bold'}>Create society</h1>
      <form onSubmit={formik.handleSubmit} className={'flex flex-col gap-4'}>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'name'} className={'text-sm font-bold'}>
            Name
          </label>
          <input
            value={formik.values.name}
            onChange={formik.handleChange}
            type={'text'}
            id={'name'}
            className={`rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none ${
              formik.errors.name != null && formik.touched.name === true
                ? 'border-red-500'
                : ''
            }`}
          />
          {formik.errors.name != null && formik.touched.name === true && (
            <div
              className={'w-fit rounded-lg bg-red-500 p-2 text-xs text-white'}
            >
              {sentenceCase(formik.errors.name)}
            </div>
          )}
        </div>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'society'} className={'text-sm font-bold'}>
            Society
          </label>
          <select
            value={formik.values.society}
            onChange={formik.handleChange}
            id={'society'}
            className={classNames(
              'rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none',
              formik.errors.society != null && formik.touched.society === true
                ? 'border-red-500'
                : ''
            )}
          >
            <option value={''}>Select a society</option>
            {societies !== false &&
              societies.map(society => (
                <option key={society.id} value={society.id}>
                  {society.name}
                </option>
              ))}
          </select>
        </div>
        <div className={'flex flex-col gap-2'}>
          <label htmlFor={'name'} className={'text-sm font-bold'}>
            Description
          </label>
          <textarea
            value={formik.values.description}
            onChange={formik.handleChange}
            id={'description'}
            rows={5}
            className={`rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none ${
              formik.errors.description != null &&
              formik.touched.description === true
                ? 'border-red-500'
                : ''
            }`}
          />
          {formik.errors.description != null &&
            formik.touched.description === true && (
              <div
                className={'w-fit rounded-lg bg-red-500 p-2 text-xs text-white'}
              >
                {sentenceCase(formik.errors.description)}
              </div>
          )}
        </div>
        <input
          type="hidden"
          value={formik.values.ownerAddress}
          name="ownerAddress"
        />
        <button
          disabled={isLoading}
          className={
            'rounded-md bg-primary p-2 text-white transition-colors hover:bg-blue-400'
          }
          type={'submit'}
        >
          {isLoading
            ? 'Creating postage batch and uploading data...'
            : 'Create'}
        </button>
      </form>
    </BaseTemplate>
  )
}
