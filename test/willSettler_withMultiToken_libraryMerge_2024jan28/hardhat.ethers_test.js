const { ethers } = require('hardhat');

async function watchContractEvents() {
    // Connect to the contract
    const contractAddress = '0x123...'; // Your contract address
    const contractAbi = [...]; // Your contract ABI
    const provider = ethers.getDefaultProvider('mumbai'); // Use the network defined in hardhat.config.js
    const contract = new ethers.Contract(contractAddress, contractAbi, provider);

    // Subscribe to the event
    contract.on('MyEvent', (data) => {
        console.log('Received event:', data);
        // Process the event data here
    });

    console.log('Listening for events...');
}

watchContractEvents().catch(console.error);
