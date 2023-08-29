import { beeDebug } from '@/vendor/BeeInstanceUtil/BeeInstanceUtil'
import { type BatchId } from '@ethersphere/bee-js'

/**
 *
 * @param amount is the amount of time that the information will be available on swarm
 * @param depth is the amount of memory allocated
 */
export async function createPostageBatchUtil (amount = '10000', depth = 1): Promise<BatchId> {
  try {
    return await beeDebug.createPostageBatch(amount, depth)
  } catch (error: any) {
    const errorMessage = error.message
    if (errorMessage !== undefined) {
      throw new Error(`Failed to create postage batch: ${errorMessage}`)
    }
    throw new Error('Failed to create postage batch')
  }
}
