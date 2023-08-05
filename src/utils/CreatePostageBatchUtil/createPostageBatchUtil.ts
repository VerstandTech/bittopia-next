import { beeDebug } from '@/vendor/BeeInstanceUtil/BeeInstanceUtil'
import { type BatchId } from '@ethersphere/bee-js'

export async function createPostageBatchUtil (): Promise<BatchId> {
  try {
    return await beeDebug.createPostageBatch('100', 17)
  } catch (error: any) {
    const errorMessage = error.message
    if (errorMessage !== undefined) {
      throw new Error(`Failed to create postage batch: ${errorMessage}`)
    }
    throw new Error('Failed to create postage batch')
  }
}

// export async function createPostageBatchUtil (
//   account: string,
//   beeDebug: BeeDebug
// ): Promise<BatchId> {
//   try {
//     return await beeDebug.createPostageBatch('10000', 17, {
//       label: account
//     })
//   } catch (error: any) {
//     const errorMessage = error.message
//     if (errorMessage !== undefined) {
//       throw new Error(`Failed to create postage batch: ${errorMessage}`)
//     }
//     throw new Error('Failed to create postage batch')
//   }
// }
