import Web3 from 'web3'
export async function LoginWithWeb3Util (): Promise<string> {
  const windowAny: any = window
  if (typeof windowAny?.ethereum !== 'undefined') {
    const web3 = new Web3(windowAny?.ethereum)
    try {
      await windowAny.ethereum.request({ method: 'eth_requestAccounts' })
      const accounts = await web3.eth.getAccounts()
      return accounts[0]
    } catch (error: any) {
      const errorMessage = error.message
      if (errorMessage !== undefined) {
        throw new Error(`Failed to connect to MetaMask: ${errorMessage}`)
      }
      throw new Error('Failed to connect to MetaMask')
    }
  } else {
    throw new Error('MetaMask is not installed')
  }
}
