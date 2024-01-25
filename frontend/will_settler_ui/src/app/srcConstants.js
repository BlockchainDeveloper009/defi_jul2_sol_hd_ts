
export const CreateBondandAdminRole_CONTRACT_ADDRESS = '0x7a92beDE8B87dD09C8dB1C979647f599f5AeBb14'
//jan-21.2024 - multiToken
//'0x6635BaCd122cfc8e8D726633f224746Bd2578872'
//dec-31-2023
//'0x9bB29A4336A891501595B2CA3ae22FF54652d78C';
//'0x03C5958b53233dd659EBAECFD5d42fEFdc4D1fDf';
  //'0xA9e7A34F06B54aabBDcdF47747eb590c93e400d9';
export const CreateBondandAdminRole_CONTRACT_ABI = 
[ 
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "symbol",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "mod",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "willCreatorFactory__NotEnoughETHEntered",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "willCreatorFactory__UpkeepNotNeeded",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "depositor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Deposit",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "LogDepositReceived",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "value",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "token",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "Withdraw",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "assetId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "assetName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "assetAmount",
        "type": "uint256"
      }
    ],
    "name": "assetCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "willId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willAmount",
        "type": "uint256"
      }
    ],
    "name": "moderatorOverrideToReleaseFunds",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "cryptoWillId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "willOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willAmount",
        "type": "uint256"
      }
    ],
    "name": "willCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "willofPropertyName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willStartDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "cryptoWillId",
        "type": "uint256"
      }
    ],
    "name": "willCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "cryptoWillId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "benefitor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willAmount",
        "type": "uint256"
      }
    ],
    "name": "willMatured",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "cryptoWillId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "enum WWethBase20_multiToken.baseWillStatus",
        "name": "baseWillStatus",
        "type": "uint8"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "benefitor",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willAmount",
        "type": "uint256"
      }
    ],
    "name": "willSettled",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "assetName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "assetTokenAddr",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "assetAmount",
        "type": "uint256"
      }
    ],
    "name": "a_createAssets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_assetId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "willStartDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "Benefitors",
        "type": "address"
      }
    ],
    "name": "a_createCryptoVault",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "a_init_Assets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "addADMINrole",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "adminrole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      }
    ],
    "name": "allowance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "approve",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "b_createTxn_Metamask",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "b_createTxn_one",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "b_createTxn_zero",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "c_getContractBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      }
    ],
    "name": "cancelWill",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum WWethBase20_multiToken.cryptoAssetStatus",
        "name": "assetStatus",
        "type": "uint8"
      }
    ],
    "name": "checkAssetStatus",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_assetId",
        "type": "string"
      }
    ],
    "name": "checkAssetisAvailable",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "enum WWethBase20_multiToken.baseWillStatus",
        "name": "s_baseStatus",
        "type": "uint8"
      }
    ],
    "name": "checkEnumStatus",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "checkIfAddminRoleIsPresent",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "locId",
        "type": "string"
      }
    ],
    "name": "check_position_s_arr_cryptoAssetIds",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "locId",
        "type": "string"
      }
    ],
    "name": "check_position_s_arr_cryptoAssetIds_expensive",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "name": "cryptoAssets",
    "outputs": [
      {
        "internalType": "string",
        "name": "AssetId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "AssetName",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "AssetTokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "AssetAmount",
        "type": "uint256"
      },
      {
        "internalType": "bool",
        "name": "isAvailable",
        "type": "bool"
      },
      {
        "internalType": "enum WWethBase20_multiToken.cryptoAssetStatus",
        "name": "assetStatus",
        "type": "uint8"
      },
      {
        "internalType": "address",
        "name": "AssetCreator",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [
      {
        "internalType": "uint8",
        "name": "",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "subtractedValue",
        "type": "uint256"
      }
    ],
    "name": "decreaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "matDate",
        "type": "uint256"
      }
    ],
    "name": "generateHash",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllAssetIds",
    "outputs": [
      {
        "internalType": "string[]",
        "name": "",
        "type": "string[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllBonds",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "willId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "assetId",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "willStartDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "willMaturityDate",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "willOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "willManager",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "Benefitors",
            "type": "address"
          },
          {
            "internalType": "enum WWethBase20_multiToken.baseWillStatus",
            "name": "s_baseStatus",
            "type": "uint8"
          }
        ],
        "internalType": "struct WWethBase20_multiToken.willlInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_assetId",
        "type": "string"
      }
    ],
    "name": "getAssetStatus",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getChainID",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getContractBirthDate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "_birthdate",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getEntranceFee",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNextAssetId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNextWillId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "token",
        "type": "address"
      }
    ],
    "name": "getTokenBalance",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getUserCreatedAssets",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "AssetId",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "AssetName",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "AssetTokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "AssetAmount",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "isAvailable",
            "type": "bool"
          },
          {
            "internalType": "enum WWethBase20_multiToken.cryptoAssetStatus",
            "name": "assetStatus",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "AssetCreator",
            "type": "address"
          }
        ],
        "internalType": "struct WWethBase20_multiToken.cryptoAssetInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "getUserCreatedBonds",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "willId",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "assetId",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "willStartDate",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "willMaturityDate",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "willOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "willManager",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "Benefitors",
            "type": "address"
          },
          {
            "internalType": "enum WWethBase20_multiToken.baseWillStatus",
            "name": "s_baseStatus",
            "type": "uint8"
          }
        ],
        "internalType": "struct WWethBase20_multiToken.willlInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      }
    ],
    "name": "getWillStatus",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "spender",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "addedValue",
        "type": "uint256"
      }
    ],
    "name": "increaseAllowance",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      },
      {
        "internalType": "address payable",
        "name": "recipient",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "makeModeratorToReleaseFunds",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      }
    ],
    "name": "manuallySettleWill",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "s_Contract_birthdate",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "s_Contract_moderator",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "s_MaturityDates",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "s_MaturityDates_keys",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "s_assetsCurrentId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "s_currentBondId",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "s_willlInfo",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "assetId",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "willStartDate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "willMaturityDate",
        "type": "uint256"
      },
      {
        "internalType": "address",
        "name": "willOwner",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "willManager",
        "type": "address"
      },
      {
        "internalType": "address payable",
        "name": "Benefitors",
        "type": "address"
      },
      {
        "internalType": "enum WWethBase20_multiToken.baseWillStatus",
        "name": "s_baseStatus",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_birthdate",
        "type": "uint256"
      }
    ],
    "name": "setContractBirthDate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transfer",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "from",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "to",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "transferFrom",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]