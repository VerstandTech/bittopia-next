import { type Reference, type UploadResult } from '@ethersphere/bee-js'

import bee from '@/vendor/BeeInstanceUtil'
import { createPostageBatchUtil } from '../CreatePostageBatchUtil/createPostageBatchUtil'

export async function uploadDataToSwarmUtil<T extends string> (
  data: T
): Promise<Reference> {
  try {
    const batchId = await createPostageBatchUtil()
    const result: UploadResult = await bee.uploadData(batchId, data)
    return result.reference
  } catch (error: any) {
    throw new Error(error.message)
  }
}

// export async function uploadDataToSwarmUtil<T extends string> (
//   data: T,
//   batchId: BatchId = import.meta.env.VITE_POSTAGE_BATCH_ID
// ): Promise<Reference> {
//   try {
//     const result: UploadResult = await bee.uploadData(batchId, data)
//     return result.reference
//   } catch (error: any) {
//     throw new Error(error.message)
//   }
// }
