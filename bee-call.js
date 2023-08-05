// import bee from '@/utils/BeeInstanceUtil'
import { Bee, BeeDebug } from '@ethersphere/bee-js'
import * as fs from 'fs'

export const bee = new Bee('http://localhost:1633')
export const debug = new BeeDebug('http://localhost:1635')

const postageBatchId = await debug.createPostageBatch('100', 17) // allocate space in the network to upload the file
// const result = await bee.uploadData(postageBatchId, 'Bee is awesome!')

const data = fs.readFileSync('package.json', 'utf8')

const result = await bee.uploadData(postageBatchId, data)

// prints Swarm hash of the file with which it can be retrieved
// here it is fd79d5e0ebd8407e422f53ce1d7c4c41ebf403be55143900f8d1490560294780
console.log('=========')
console.log('reference:', result.reference)
console.log('=========')

const retrievedData = await bee.downloadData(result.reference)

console.log(retrievedData.text()) // prints 'Bee is awesome!'s
