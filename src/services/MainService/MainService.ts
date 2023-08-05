import { type MainState } from '@/store/useMainStore/useMainStore'
import DatabaseUtil from '@/utils/DatabaseUtil'
import uploadDataToSwarmUtil from '@/utils/UploadDataToSwarmUtil'
import { bee } from '@/vendor/BeeInstanceUtil/BeeInstanceUtil'

export type MainServiceData = Exclude<MainState, 'isLoading'>

export class MainService {
  // public async mutate (
  //   data: MainServiceData
  // ): Promise<{ reference: string, data: MainServiceData }> {
  //   try {
  //     const hash = await uploadDataToSwarmUtil(JSON.stringify(data))
  //     const db = new DatabaseUtil()

  //     await db.create('references', { reference: hash, createdAt: new Date() })

  //     return { reference: hash, data }
  //   } catch (error: any) {
  //     throw new Error(error.message)
  //   }
  // }
  public async mutate (
    data: MainServiceData
  ): Promise<{ reference: string, data: MainServiceData }> {
    try {
      const hash = await uploadDataToSwarmUtil(JSON.stringify(data))
      const db = new DatabaseUtil()

      await db.create('references', { reference: hash, createdAt: new Date() })

      return { reference: hash, data }
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  public async query (): Promise<{ reference: string, data: MainServiceData }> {
    try {
      const db = new DatabaseUtil()
      const result = await db.readLatest('references')
      const beeResult = await bee.downloadData(result.reference)
      const data = beeResult.json() as unknown

      return { reference: result.reference, data: data as MainServiceData }
    } catch (error: any) {
      throw new Error(`Error querying data: ${error.message}`)
    }
  }
}
