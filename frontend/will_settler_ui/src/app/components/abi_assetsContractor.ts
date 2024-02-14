export const abi_assetsContractor = [
    {
      "inputs": [
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
          "internalType": "uint256",
          "name": "assetAmount",
          "type": "uint256"
        }
      ],
      "name": "assetAmountCollectedFromCustomer",
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
      "inputs": [
        {
          "internalType": "string",
          "name": "_assetId",
          "type": "string"
        },
        {
          "internalType": "enum Enums.CryptoAssetStatus",
          "name": "val",
          "type": "uint8"
        }
      ],
      "name": "ChangeCryptoAssetStatus",
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
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "assetId",
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
      "name": "a_createAssets_TransferAssetFromCustomerToContract",
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
          "internalType": "enum Enums.CryptoAssetStatus",
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
      "inputs": [
        {
          "internalType": "string",
          "name": "_assetId",
          "type": "string"
        }
      ],
      "name": "getAssetAmount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "string",
          "name": "_assetId",
          "type": "string"
        }
      ],
      "name": "getAssetStatusEnum",
      "outputs": [
        {
          "internalType": "enum Enums.CryptoAssetStatus",
          "name": "",
          "type": "uint8"
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
      "name": "getModerator",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
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
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "s_userCreatedAssets",
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
    }
  ] as const