import { ethers } from 'ethers'

async function deployContract(contractName: string, args: Array<any>, accountIndex?: number): Promise<ethers.Contract> {    
    console.log(`deploying ${contractName}`)

    const artifactsPath = `browser/contracts/artifacts/${contractName}.json`
    const metadata = JSON.parse(await remix.call('fileManager', 'getFile', artifactsPath))
    
    const signer = (new ethers.providers.Web3Provider(web3Provider)).getSigner(accountIndex)

    const factory = new ethers.ContractFactory(metadata.abi, metadata.data.bytecode.object, signer)
    const contract = await factory.deploy(...args)   
    await contract.deployed()

    return contract
}

export default deployContract