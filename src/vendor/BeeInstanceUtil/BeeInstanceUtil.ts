import { Bee, BeeDebug } from '@ethersphere/bee-js'

export const bee = new Bee(import.meta.env.VITE_BEE_BASE_URL)
export const beeDebug = new BeeDebug(import.meta.env.VITE_BEE_DEBUG_BASE_URL)
