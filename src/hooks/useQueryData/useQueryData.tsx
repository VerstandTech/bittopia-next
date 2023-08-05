import MainService from '@/services/MainService'
import { type MainServiceData } from '@/services/MainService/MainService'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'

export const useQueryData = (): UseQueryResult<{
  reference: string
  data: MainServiceData
}> => {
  return useQuery(
    ['data'],
    async () => {
      return await MainService.query()
    },
    {
      cacheTime: 1000 * 60 * 5,
      refetchInterval: 1000 * 60 * 1,
      staleTime: 1000 * 60 * 5
    }
  )
}
