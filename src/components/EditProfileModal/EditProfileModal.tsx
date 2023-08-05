import { useQueryData } from '@/hooks/useQueryData/useQueryData'
import MainService from '@/services/MainService'
import { useAuthCredentials } from '@/store/AuthCredentials/AuthCredentials'
import { useMainStore, type MainState } from '@/store/useMainStore/useMainStore'
import classNames from 'classnames'
import { useFormik } from 'formik'
import { useState, type FC } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import * as yup from 'yup'
import { Modal } from '../Modal/Modal'

const EditProfileSchema = yup.object({
  name: yup.string().required(),
  bio: yup.string()
})

interface EditProfileModalProps {
  isOpen: boolean
  onClose: () => void
}

export const EditProfileModal: FC<EditProfileModalProps> = ({
  isOpen,
  onClose
}) => {
  const { data: queryData, refetch } = useQueryData()
  const { setData } = useMainStore()
  const { web3Address } = useAuthCredentials()
  const [isLoading, setIsLoading] = useState(false)

  const formik = useFormik({
    initialValues: {
      name: queryData?.data?.profiles?.[web3Address]?.name ?? '',
      bio: queryData?.data?.profiles?.[web3Address]?.description ?? ''
    },
    enableReinitialize: true,
    validateOnBlur: false,
    validateOnChange: false,
    validateOnMount: false,
    validationSchema: EditProfileSchema,
    onSubmit: (values): void => {
      const data = queryData?.data as MainState

      const dataSet = {
        ...data,
        profiles: {
          ...data.profiles,
          ...{
            [web3Address]: {
              id: web3Address,
              name: values.name,
              address: web3Address,
              description: values.bio
            }
          }
        }
      }

      setIsLoading(true)

      MainService.mutate(dataSet)
        .then(result => {
          setData(result.data)
          setIsLoading(false)
          void refetch()
          onClose()
        })
        .catch(err => {
          setIsLoading(false)
          console.log(err)
        })
    }
  })
  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        onClose()
      }}
    >
      <div
        className={
          'flex min-w-[500px] flex-col gap-8 rounded-2xl bg-background-color p-8'
        }
      >
        <div className={'flex w-full items-center justify-between'}>
          <h2 className={'text-bold text-lg text-white'}>Edit profile</h2>
          <div
            onClick={() => {
              onClose()
            }}
            className={
              'flex h-[50px] w-[50px] items-center justify-center rounded-full border border-gray-500 text-lg hover:cursor-pointer hover:border-white'
            }
          >
            <RiCloseLine className={'fill-white'} />
          </div>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={'flex w-full flex-col gap-4 text-white'}>
            <div className="flex flex-col gap-1">
              <input
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className={`rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none ${
                  formik.errors.name != null && formik.touched.name === true
                    ? 'border-red-500'
                    : ''
                }`}
                type="text"
                placeholder="Name"
              />
              {formik.errors.name != null && formik.touched.name === true && (
                <p className={'text-xs text-red-500'}>
                  {formik.errors.name.toString()}
                </p>
              )}
            </div>
            <div className="flex flex-col gap-1">
              <textarea
                rows={5}
                name="bio"
                onChange={formik.handleChange}
                className={classNames(
                  'rounded-md border border-gray-500 bg-transparent p-2 focus:border-primary focus:outline-none',
                  formik.errors.bio != null && formik.touched.bio === true
                    ? 'border-red-500'
                    : ''
                )}
                placeholder="Bio"
              >
                {formik.values.bio}
              </textarea>
              {formik.errors.bio != null && formik.touched.bio === true && (
                <p className={'text-xs text-red-500'}>
                  {formik.errors.bio.toString()}
                </p>
              )}
            </div>
            <button
              disabled={isLoading}
              className={
                'rounded-md bg-primary p-2 text-white transition-colors hover:bg-blue-400 disabled:bg-blue-600'
              }
              type={'submit'}
            >
              {isLoading
                ? 'Creating postage batch and uploading data...'
                : 'Create'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  )
}
