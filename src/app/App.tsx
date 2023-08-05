import { useEffect, useState, type ReactElement } from 'react'
import {
  CategoryDropdown,
  type CategoryItem
} from './components/CategoryDropdown/CategoryDropdown'
import CourseGrid from './components/CourseAreaGrid'
import { SearchField } from './components/SearchField/SearchField'
import useQueryData from './hooks/useQueryData'
import { BaseTemplate } from './layouts/BaseTemplate/BaseTemplate'
import { useMainStore } from './store/useMainStore/useMainStore'

function App (): ReactElement {
  const { data, setData } = useMainStore()
  const [activeScienceField, setactiveScienceField] = useState<
  CategoryItem | undefined
  >(undefined)
  const { data: resultData, isLoading } = useQueryData()

  useEffect(() => {
    if (resultData !== undefined) {
      setData({ ...resultData.data, isLoading: false })
    }
  }, [resultData])

  const filteredSocieties = Object.values(data.societies).filter(society => {
    return (
      activeScienceField?.value === undefined ||
      society.studyArea === activeScienceField.value
    )
  })

  return (
    <BaseTemplate showFooter>
      <div
        className={
          'flex w-full flex-col items-center justify-center gap-5 sm:flex-row sm:justify-between'
        }
      >
        <div
          className={
            'flex w-full flex-col items-center justify-between gap-5 sm:w-2/3 sm:flex-row sm:justify-start'
          }
        >
          <SearchField />
          <CategoryDropdown
            itemList={[
              { label: 'All Sciences', value: undefined },
              { label: 'Alpha Sciences', value: 'Alpha Sciences' },
              { label: 'Beta Sciences', value: 'Beta Sciences' },
              { label: 'Gamma Sciences', value: 'Gamma Sciences' }
            ]}
            selectedItem={activeScienceField}
            onChange={setactiveScienceField}
          />
        </div>
        <div className={'text-center text-gray-500'}>
          {Object.keys(data.societies).length} Societies
        </div>
      </div>
      {isLoading
        ? (
        <div
          className={
            'flex min-h-[400px] w-full items-center justify-center rounded-lg p-8 text-center text-slate-500'
          }
        >
          Loading...
        </div>
          )
        : (
        <CourseGrid societies={filteredSocieties} />
          )}
    </BaseTemplate>
  )
}

export default App
