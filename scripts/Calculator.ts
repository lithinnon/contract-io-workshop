import deployContract from "./deployer";

async function deploy(): Promise<void> {
  const targetContract = "Calculator";
  try {
    const result = await deployContract(targetContract, []);
    console.log(`address: ${result.address}`);
  } catch (e) {
    console.log(e.message);
  }
}

deploy();
