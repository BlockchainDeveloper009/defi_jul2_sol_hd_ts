const ContractInfo = {
    contractAddress: String,
    deployed_at: {type: Date},
    author: String,
    ChainId: String,
    Network:String,
    tags: [String],
    abi:String,
    date: { type: Date, default: Date.now },
  }

module.exports=ContractInfo;

