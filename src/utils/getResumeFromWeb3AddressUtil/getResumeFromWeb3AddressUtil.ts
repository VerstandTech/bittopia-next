export function getResumeFromWeb3AddressUtil (address: string): string {
  try {
    const part1 = address.slice(0, 5)
    const part2 = address.slice(address.length - 5, address.length)

    return `${part1}...${part2}`
  } catch (error) {
    throw new Error('Invalid string')
  }
}
