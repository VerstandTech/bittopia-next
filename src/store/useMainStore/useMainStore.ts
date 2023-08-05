import { create } from 'zustand'

type Address = string
export type ScienceFields =
  | 'Alpha Sciences'
  | 'Beta Sciences'
  | 'Gamma Sciences'
export interface Course {
  id?: string
  name: string
  description: string
  ownerAddress: Address
  profiles: Address[]
}

export interface Society {
  id?: string
  name: string
  description: string
  studyArea: ScienceFields
  ownerAddress: Address
  courses?: Course[]
  profiles?: string[]
}

export interface Profile {
  id?: Address
  name: string
  description: string
  address: Address
}

export interface MainState {
  isLoading: boolean
  profiles: Record<string, Profile>
  societies: Record<string, Society>
}

const initialState: MainState = {
  isLoading: false,
  profiles: {},
  societies: {}
}

interface MainStore {
  data: MainState
  setData: (data: MainState) => void

  setIsLoading: (isLoading: boolean) => void
}

export const useMainStore = create<MainStore>(set => ({
  data: initialState,
  setData: (data: MainState) => {
    set(state => ({
      ...state,
      data
    }))
  },
  setIsLoading: (isLoading: boolean) => {
    set(state => ({
      ...state,
      isLoading
    }))
  }
}))
