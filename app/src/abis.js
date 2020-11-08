export const ERC20Abi = [
    {
      "name": "Transfer",
      "inputs": [
        {
          "type": "address",
          "name": "sender",
          "indexed": true
        },
        {
          "type": "address",
          "name": "receiver",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "name": "Approval",
      "inputs": [
        {
          "type": "address",
          "name": "owner",
          "indexed": true
        },
        {
          "type": "address",
          "name": "spender",
          "indexed": true
        },
        {
          "type": "uint256",
          "name": "value",
          "indexed": false
        }
      ],
      "anonymous": false,
      "type": "event"
    },
    {
      "outputs": [],
      "inputs": [
        {
          "type": "string",
          "name": "_name"
        },
        {
          "type": "string",
          "name": "_symbol"
        },
        {
          "type": "uint256",
          "name": "_decimals"
        },
        {
          "type": "uint256",
          "name": "_supply"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "name": "totalSupply",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 1061
    },
    {
      "name": "balanceOf",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_account"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 1306
    },
    {
      "name": "transfer",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_recipient"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 76072
    },
    {
      "name": "allowance",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_owner"
        },
        {
          "type": "address",
          "name": "_spender"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "gas": 1581,
      "constant": true
    },
    {
      "name": "approve",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_spender"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 58056
    },
    {
      "name": "transferFrom",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_sender"
        },
        {
          "type": "address",
          "name": "_recipient"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 77408
    },
    {
      "name": "increaseAllowance",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_spender"
        },
        {
          "type": "uint256",
          "name": "_addedValue"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 36923
    },
    {
      "name": "decreaseAllowance",
      "outputs": [
        {
          "type": "bool",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "_spender"
        },
        {
          "type": "uint256",
          "name": "_subtractedValue"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 38151
    },
    {
      "name": "mint",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_recipient"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 75888
    },
    {
      "name": "burn",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_account"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 76746
    },
    {
      "name": "burnFrom",
      "outputs": [],
      "inputs": [
        {
          "type": "address",
          "name": "_account"
        },
        {
          "type": "uint256",
          "name": "_amount"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function",
      "gas": 112993
    },
    {
      "name": "total_supply",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "gas": 1421,
      "constant": true
    },
    {
      "name": "name",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "gas": 7853,
      "constant": true
    },
    {
      "name": "symbol",
      "outputs": [
        {
          "type": "string",
          "name": ""
        }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "gas": 6906,
      "constant": true
    },
    {
      "name": "decimals",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [],
      "stateMutability": "view",
      "type": "function",
      "gas": 1511,
      "constant": true
    },
    {
      "name": "balances",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "arg0"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "gas": 1756,
      "constant": true
    },
    {
      "name": "allowances",
      "outputs": [
        {
          "type": "uint256",
          "name": ""
        }
      ],
      "inputs": [
        {
          "type": "address",
          "name": "arg0"
        },
        {
          "type": "address",
          "name": "arg1"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "gas": 2001,
      "constant": true
    }
  ]