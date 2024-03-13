const { ethers } = require('ethers');

// async function watchContractEvents() {
//     // Infura endpoint for the Polygon Mumbai testnet
//     const provider = new ethers.providers.JsonRpcProvider('https://polygon-mumbai.infura.io/v3/YOUR_INFURA_PROJECT_ID');

//     // ABI and contract address of the smart contract
//     const abi = [...] // Your contract ABI
//     const contractAddress = '0x123...'; // Your contract address

//     // Connect to the contract
//     const contract = new ethers.Contract(contractAddress, abi, provider);

//     // Subscribe to the event
//     contract.on('MyEvent', (data) => {
//         console.log('Received event:', data);
//         // Process the event data here
//     });

//     console.log('Listening for events...');
// }

// watchContractEvents();
