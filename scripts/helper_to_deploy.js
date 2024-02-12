
async function verify_contract(contractAddress, args, net) {
    
  console.log('verifying_contract method starting to verify...');
  console.log(`contractAddress -- ${contractAddress}`)
  console.log(`args -- ${args}`)
  console.log(`net -- ${net}`)
  //&& process.env.ETHERSCAN_API_KEY
  if (net === 80001) {
    console.log(`mumbai IS ALLOWED`);
    try {
      await run("verify:verify", {
        address: contractAddress,
        constructorArguments: args
      });
      console.log(`getting out of verify module`)
    } catch (e) {
      if (e.message.toLowerCase().includes("already verified")) {
        console.log(`contract already verified`);
        console.log(e)
      } else {
        console.log(`error occured during contract verify`);
        console.log(e);
      }

    }
  } else{
    console.log(`Not a polygon mumbai`)
  }

}
exports.verify_contract = verify_contract;
