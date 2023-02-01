# Smart Contract Input & Output Workshop

This workshop is a hands-on learning experience that focuses on understanding how **calldata** is used as an input in the Ethereum Virtual Machine (EVM) and how **event logs** are used as an output. The code for the smart contract will be run on the Remix IDE, which is available at [remix.ethereum.org](https://remix.ethereum.org/).

Please follow the steps below to clone the repository and deploy the contract on the [Remix IDE](https://remix.ethereum.org/).

## Step 1: Cloning the Repository

- On the Remix IDE, navigate to the hamburger menu located near the "workspaces" title on the upper-left side of the screen.
- From the dropdown menu, select "Clone" with the GitHub icon as the prefix.
- A text input field will appear with a placeholder "Enter git repository URL". Insert the GitHub repository URL for this workshop: [`https://github.com/lithinnon/contract-io-workshop`](https://github.com/lithinnon/contract-io-workshop).
- After entering the URL, click the "OK" button. A new workspace will be created, named after the GitHub repository.

## Step 2: Deploying the Contract

- Open the `contracts/Calculator.sol` file in the Remix IDE.
- On the left sidebar, select "Solidity compiler".
- Choose version 0.8.17 and then click on the blue "Compile Calculator.sol" button for the smart contract file.
- Navigate to "Deploy & run transactions" and select `Calculator - contracts/Calculator.sol` from the "CONTRACT (Compiled by Remix)" dropdown.
- Click the orange "Deploy" button, and the deployed contract will appear under "Deployed Contracts" as "Calculator`".

I hope that this workshop helps you understand the inputs and outputs of the Ethereum Virtual Machine and provides a hands-on learning experience.

Enjoy!
