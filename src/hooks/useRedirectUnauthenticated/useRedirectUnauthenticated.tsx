import useAuthCredentials from '@/store/AuthCredentials'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const useRedirectUnauthenticated = (): void => {
  const { web3Address } = useAuthCredentials()
  const navigate = useNavigate()

  useEffect(() => {
    if (
      web3Address == null ||
      web3Address === '' ||
      web3Address === undefined
    ) {
      navigate('/')
    }
  }, [web3Address])
}
