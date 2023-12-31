import   ethers  from "hardhat";
import hre  from "hardhat";

//var FaucetContract = artifacts.require("");
let contracts = ['WWethcreateWillsERC20']
async function mFunction() {
    await hre.run("compile");
    const Lock = await ethers.getContractFactory(contracts[0]);
    const lock = await Lock.deploy();

    FaucetContract.web3.eth.getGasPrice(function(error, result) {
        var gasPrice = Number(result);
        console.log("Gas Price is " + gasPrice + " wei"); // "10000000000000"
    
        // Get the contract instance
        FaucetContract.deployed().then(function(FaucetContractInstance) {
    
            // Use the keyword 'estimateGas' after the function name to get the gas estimation for this particular function (aprove)
            FaucetContractInstance.send(web3.utils.toWei(1, "ether"));
            return FaucetContractInstance.withdraw.estimateGas(web3.utils.toWei(0.1, "ether"));
    
        }).then(function(result) {
            var gas = Number(result);
    
            console.log("gas estimation = " + gas + " units");
            console.log("gas cost estimation = " + (gas * gasPrice) + " wei");
            console.log("gas cost estimation = " + FaucetContract.web3.utils.fromWei((gas * gasPrice), 'ether') + " ether");
        });
    });

}

mFunction().catch((error)=> {
    console.error(error);
    process.exitCode=1;
})