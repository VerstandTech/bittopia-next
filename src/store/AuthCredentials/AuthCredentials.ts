import { create, type StoreApi, type UseBoundStore } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthCredentials {
  web3Address: string
  setWeb3Address: (web3Address: string) => void
}

export const useAuthCredentials: UseBoundStore<StoreApi<AuthCredentials>> =
  create(
    persist(
      set => ({
        web3Address: '',
        setWeb3Address: (web3Address: string) => {
          set({ web3Address })
        }
      }),
      { name: 'auth-credentials' }
    )
  )
