# ERC20 based Hardhat Project

This is as javascript project. has 'ts' in project name as mistake.
WillsCreatorFactory - this contract enables users to create assets, assign benefitors, and timeline by when benefitors will accept it.

1. Robert creates an asset for eg. crypto 4 ETH with id 'ca-0' with status 'Available:
```
Different tokens can be implemented | Phase2 Feature
```

2. Using 'ca-0', Robert can create a will [with id '0', autogenerated], with maturity date for this will to be active

2% will be collected as fees along with gas to carry out the operation.
```
status of 'ca-0' will be changed to assigned
```

3. On reaching maturity date, smart contract will settle the asset to Benefitor.
```
No Fees will be colected
```


4. if Robert wants to change benefitor, thats not possible, however he can cancel the will.
```
2% Fees will be collected
```

5. If Robert wants to liquidate before the maturity date, then he can settle manually to Benefitor.
```
No Fees | N/I
```

6. If Robert cancels the will, then money will be liquidated to his original wallet. 
Fees 2% will be collected as charge

```

only Robert as owner of the will can cancell this will. [MultiSign can be added to authorize the txn, in phase 3]
Will/Txn status - to be udpated | Phase2 Feature
asset status - to be udpated || Phase2 Feature

Fees: 

```

Legions:
N/I - Yet to Implement / Not Implemented /
### Highligths 

WillCreatorFactory smart contract is created by following best practises of using
events, error, 

Chainlink automation | 
Inheritance         |

mocha chai library tests | using ethers of hardhat, unitests are written


Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
# to run typescript files
ts-node ./scripts/gasEstimater.ts
#to switch node versions
nvm list
nvm use 16.0.0
nvm --vesrion

#to run a js script from 
node ./scripts/gasEsitmater.js

#to run a playwright script
npx playwright test "index_in_youtube.spec.ts"  ui-headed project=chromium

```
## Run Tests

### Local Network

```
npx hardhat test .\test\test_willSettler_23Jul02\unittest_willSettler\localnewtork.WillCreator.test.js --network localhost
```
### Run single test [make one of describe.only]

```
npx hardhat test .\test\test_willSettler_23Jul02\unittest_willSettler\localnewtork.WillCreator.test.js --network localhost 
```
### Config learnings:

```hardhat.config: set paths of contract & test folders
module.exports = {
  // other configuration options...
  paths: {
    sources: "./contracts", // Path to your contract source files
    artifacts: "./artifacts", // Path to your contract artifact files
    cache: "./cache", // Path to your cache directory (optional)
    tests: "./test", // Path to your test files (optional)
  },
  // other configuration options...
};

```

```packagejson.config


```

 #1. HardhatError: HH700: Artifact for contract [is missing or contract path not set correcntly]


### Programming quick references

```store keys of mapping vars separately to equery or iteration purposes

        pragma solidity ^0.8.0;

contract MappingExample {
    mapping(uint256 => uint256) public myMapping;
    uint256[] public keys;

    function setValue(uint256 key, uint256 value) public {
        myMapping[key] = value;
        keys.push(key);
    }

    function getAllValues() public view returns (uint256[] memory) {
        uint256[] memory values = new uint256[](keys.length);
        for (uint256 i = 0; i < keys.length; i++) {
            values[i] = myMapping[keys[i]];
        }
        return values;
    }
}

```

```code:datetimestamp 
            const timestamp = 1688825509;
        const date = new Date(timestamp * 1000);

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Month starts from 0, so adding 1 to get the actual month
        const day = date.getDate();

        console.log(`Year: ${year}`);
        console.log(`Month: ${month}`);
        console.log(`Day: ${day}`);

```

### Take aways /Learnings/ Quick references from his project

using of beforeEach is mandatory as smart

#1. "TypeError: invalid value for Contract target (argument='target', value=4.596103100268184e+47, code=INVALID_ARGUMENT, version=6.6.2)" indicates that you're passing an invalid value for the target parameter when creating a contract instance.

Soln: The target parameter expects a valid Ethereum address as a string

#2. "TypeError: underflow (argument="value", value=1688824185.225, code=INVALID_ARGUMENT, version=6.6.2)" :- ndicates an underflow error during a value calculation. An underflow occurs when a calculation or operation results in a value that is smaller than the minimum representable value.

#3. "TypeError: Cannot read properties of undefined (reading 'format')" typically occurs when you try to access a method or property of an undefined value in the ethers.js library.


#4: how to use deployed contract address to read and interact with contract on hardhat localhost
Soln: Create an instance of the contract: Use the ethers library to create an instance of the deployed contract. Pass the contract's address and ABI to the ethers.Contract constructor.


#5. How to parse ethers in  javascript to send to solidity
const amountToSend = ethers.utils.parseEther("1.0"); 

```CreateContract Instance & fromat ethers

**            const provider = new ethers.providers.JsonRpcProvider(); // Use the default provider

            // Create a contract instance
            const contract = new ethers.Contract(contractAddress, contractArtifact.abi, provider);

            // Retrieve the contract balance
            const balance = await provider.getBalance(contract.address);

            console.log("Contract balance:", ethers.utils.formatEther(balance));**

```


#6. send ethers while calling smart contract.
soln: const tx = await contract.methodName(arg1, arg2, { value: amountToSend });



#7. Query blockchain based on events. use block.number, block.transactions, txHash of txns 

From Localhost:

JsonRpcProvider(localhost url) present in pacakge proviers
Note: Ethers.providers doesnt work in hardhat, you have to install pacakge "const { JsonRpcProvider } = require("@ethersproject/providers");"

Error: could not detect network (event="noNetwork", code=NETWORK_ERROR, version=providers/5.7.2)

From Etherum providers: infura, hashnode
```Code Snippet

**                            const { JsonRpcProvider } = require("@ethersproject/providers");

                            async function fetchBlockData() {
                            const provider = new JsonRpcProvider("https://mainnet.infura.io/v3/your-infura-api-key");

                            // Get the latest block number
                            const blockNumber = await provider.getBlockNumber();
                            console.log("Latest Block Number:", blockNumber);

                            // Get block information by block number
                            const block = await provider.getBlock(blockNumber);
                            console.log("Block Information:", block);

                            // Get balance of an Ethereum address
                            const address = "0x123456789abcdef";
                            const balance = await provider.getBalance(address);
                            console.log("Address Balance:", balance.toString());

                            // Get transaction count of an Ethereum address
                            const transactionCount = await provider.getTransactionCount(address);
                            console.log("Transaction Count:", transactionCount);

                            // Get code of a contract address
                            const contractAddress = "0xabcdef123456789";
                            const code = await provider.getCode(contractAddress);
                            console.log("Contract Code:", code);
                            }

                            fetchBlockData();**

```

```Query & decode data in Blockchain using web3 library

                // Use a web3 library to query the blockchain
            const web3 = new Web3('your-provider-url');

            const contractAddress = 'your-contract-address';
            const contractAbi = [{...}] // ABI of your contract

            const myContract = new web3.eth.Contract(contractAbi, contractAddress);

            // Set the filter options to retrieve logs for the specific event
            const options = {
                fromBlock: 0,
                toBlock: 'latest',
                address: contractAddress,
                topics: [web3.utils.sha3('MyEvent(address,uint256)')]
            };

            // Retrieve the event logs matching the filter options
            const logs = await web3.eth.getPastLogs(options);

            // Process the logs to extract the relevant information
            for (const log of logs) {
                const decodedLog = myContract.methods.myEvent().decode(log.data);
                console.log(decodedLog);
            }


```


#8. sTimestamp to send to solidity
use unixtime stamp



#9. how to expect on Promise from a function
                it("should return a Promise", function () {
                            const result = contract.myFunction();
                        // Assert that the return value is a Promise
                            expect(result).to.be.an.instanceOf(Promise);
                        // Additional assertions or validations
                         // ...
                });

#10. how to expect an event emitted by an method in contract

                    it("should emit 'eventName' event", async function () {
                            // Call the method that is expected to emit the event
                                const result = await contract.methodThatEmitsEvent();

                            // Assert that the event was emitted
                                await expect(result)
                                    .to.emit(contract, "eventName")
                                    .withArgs(arg1, arg2, ...); // Optional: Check event arguments

                            // Additional assertions or validations
                                  // ...
                    });

#11. you can use the console.warn  in Chai Mocha, 

#11. you can throw error from testcase in Chai Mocha, 

                        it("My Test Case", function() {
                        // Some test logic
                        
                        if (condition) {
                            throw new Error("Stopping the test due to a condition"); // Stop the test execution here
                        }
                        
                        // More test logic
                        });