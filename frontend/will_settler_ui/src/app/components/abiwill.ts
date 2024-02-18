export const abiwill = 
[
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_AssetCreatorFactoryAddress",
        "type": "address"
      },
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
        "indexed": false,
        "internalType": "uint256",
        "name": "assetAmount",
        "type": "uint256"
      }
    ],
    "name": "LogAssetAmount",
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
      }
    ],
    "name": "LogAssetId",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "willId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "LogCancelWillAttempt",
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
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "LogSenderAndRecipient",
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
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "contractWillCreatorLogDepositReceived",
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
    "inputs": [],
    "name": "AssetCreatorFactoryInstance",
    "outputs": [
      {
        "internalType": "contract AssetCreatorFactory_multiToken",
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
      },
      {
        "internalType": "uint256",
        "name": "CollectPayment",
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
    "inputs": [],
    "name": "cryptoAssetInfoInstance",
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
        "internalType": "enum Enums.CryptoAssetStatus",
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
    "name": "getContractInfo",
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
    "name": "getMyAssets",
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
            "internalType": "enum Enums.CryptoAssetStatus",
            "name": "assetStatus",
            "type": "uint8"
          },
          {
            "internalType": "address",
            "name": "AssetCreator",
            "type": "address"
          }
        ],
        "internalType": "struct cryptoAssetInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getMyWills",
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
    "name": "getWillInfo",
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
        "internalType": "struct WWethBase20_multiToken.willlInfo",
        "name": "",
        "type": "tuple"
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
    "inputs": [],
    "name": "mainTenance_getAllBonds",
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
      },
      {
        "internalType": "uint256",
        "name": "CollectPaymentFlag",
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
] as const