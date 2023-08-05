import useQueryData from '@/hooks/useQueryData'
import { useRedirectUnauthenticated } from '@/hooks/useRedirectUnauthenticated/useRedirectUnauthenticated'
import BaseTemplate from '@/layouts/BaseTemplate'
import MainService from '@/services/MainService'
import { useAuthCredentials } from '@/store/AuthCredentials/AuthCredentials'
import { useMainStore, type Society } from '@/store/useMainStore/useMainStore'
import { sentenceCase } from 'change-case'
import { useFormik } from 'formik'
import { useState, type FC } from 'react'
import { v4 } from 'uuid'
import * as yup from 'yup'

const SocietySchema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  studyArea: yup
    .string()
    .required()
    .oneOf(['Alpha Sciences', 'Beta Sciences', 'Gamma Sciences']),
  ownerAddress: yup.string().required(),
  courses: yup.array()
})

export const NewSociety: FC = () => {
  const { web3Address } = useAuthCredentials()
  const { data, setData } = useMainStore()
  const { refetch } = useQueryData()
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik<Society>({
    initialValues: {
      name: '',
      description: '',
      studyArea: 'Alpha Sciences',
      ownerAddress: web3Address,
      courses: [],
      profiles: [web3Address]
    },
    enableReinitialize: true,
    validationSchema: SocietySchema,
    onSubmit: (values): void => {
      const uuid = v4()

      const dataSet = {
        ...data,
        societies: {
          ...data.societies,
          ...{
            [uuid]: {
              id: uuid,
              name: values.name,
              description: values.description,
              studyArea: values.studyArea,
              ownerAddress: web3Address,
              courses: [],
              profiles: [web3Address]
            } satisfies Society
          }
        },
        profiles: {
          ...data.profiles,
          ...{
            [web3Address]: {
              id: web3Address,
              name: data.profiles[web3Address]?.name ?? '',
              address: web3Address,
              description: data.profiles[web3Address]?.description ?? ''
            }
          }
        }
      }

      setIsLoading(true)

      MainService.mutate(dataSet)
        .then(result => {
          setIsLoading(false)
          setData(result.data)
          formik.resetForm()
          void refetch()
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
          <label htmlFor={'name'} className={'text-sm font-bold'}>
            Science field
          </label>
          <select
            value={formik.values.studyArea}
            onChange={formik.handleChange}
            id={'studyArea'}
            className={`rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none ${
              formik.errors.studyArea != null &&
              formik.touched.studyArea === true
                ? 'border-red-500'
                : ''
            }`}
          >
            <option value={''}>Select a science field</option>
            <option value={'Alpha Sciences'}>Alpha Sciences</option>
            <option value={'Beta Sciences'}>Beta Sciences</option>
            <option value={'Gamma Sciences'}>Gamma Sciences</option>
          </select>
          {formik.errors.studyArea != null &&
            formik.touched.studyArea === true && (
              <div
                className={'w-fit rounded-lg bg-red-500 p-2 text-xs text-white'}
              >
                {sentenceCase(formik.errors.studyArea)}
              </div>
          )}
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
