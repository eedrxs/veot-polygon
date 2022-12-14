export const POLLFACTORY_VERIFICATION = "https://mumbai.polygonscan.com/address/0x85A56AE398BB46ac9a0949a143F14C0e6EfB52eA#code"
export const POLLFACTORY_ADDRESS = "0x85A56AE398BB46ac9a0949a143F14C0e6EfB52eA";
export const POLLFACTORY_ABI = [
  {
    inputs: [
      {
        internalType: "string[]",
        name: "titleDesc_",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "startEnd_",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "id",
                type: "uint8",
              },
              {
                internalType: "string",
                name: "text",
                type: "string",
              },
            ],
            internalType: "struct PollData.Option_[]",
            name: "options",
            type: "tuple[]",
          },
        ],
        internalType: "struct PollData.Category_[]",
        name: "categories_",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "participation_",
        type: "address[]",
      },
    ],
    name: "createPoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "pollCount",
        type: "uint256",
      },
    ],
    name: "pollCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "currentTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "n",
        type: "uint8",
      },
    ],
    name: "fetchPolls",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "titleDesc",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "startEnd",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
          {
            internalType: "enum PollData.PollStatus",
            name: "pollStatus",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOpen",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isEligible",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        internalType: "struct PollData.QueryResult[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
    ],
    name: "getPollAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPollCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_startEnd",
        type: "uint256[]",
      },
    ],
    name: "pollStatus",
    outputs: [
      {
        internalType: "enum PollData.PollStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId",
        type: "uint256",
      },
    ],
    name: "queryPoll",
    outputs: [
      {
        components: [
          {
            internalType: "string[]",
            name: "titleDesc",
            type: "string[]",
          },
          {
            internalType: "uint256[]",
            name: "startEnd",
            type: "uint256[]",
          },
          {
            internalType: "uint256",
            name: "creationTime",
            type: "uint256",
          },
          {
            internalType: "enum PollData.PollStatus",
            name: "pollStatus",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "votes",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isOpen",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isEligible",
            type: "bool",
          },
          {
            internalType: "uint256",
            name: "pollId",
            type: "uint256",
          },
        ],
        internalType: "struct PollData.QueryResult",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
export const POLL_ABI = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "pollId_",
        type: "uint256",
      },
      {
        internalType: "string[]",
        name: "titleDesc_",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "startEnd_",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "id",
                type: "uint8",
              },
              {
                internalType: "string",
                name: "text",
                type: "string",
              },
            ],
            internalType: "struct PollData.Option_[]",
            name: "options",
            type: "tuple[]",
          },
        ],
        internalType: "struct PollData.Category_[]",
        name: "categories_",
        type: "tuple[]",
      },
      {
        internalType: "address[]",
        name: "participants_",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint8[]",
        name: "_options",
        type: "uint8[]",
      },
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "totalVotes",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256[][]",
        name: "optionsVotes",
        type: "uint256[][]",
      },
    ],
    name: "voteCasted",
    type: "event",
  },
  {
    inputs: [],
    name: "getCurrentVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint32[][]",
        name: "",
        type: "uint32[][]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOptionsAndVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "id",
            type: "uint8",
          },
          {
            internalType: "string",
            name: "text",
            type: "string",
          },
          {
            components: [
              {
                internalType: "uint8",
                name: "id",
                type: "uint8",
              },
              {
                internalType: "uint32",
                name: "votes",
                type: "uint32",
              },
              {
                internalType: "string",
                name: "text",
                type: "string",
              },
            ],
            internalType: "struct PollData.Option[]",
            name: "options",
            type: "tuple[]",
          },
        ],
        internalType: "struct PollData.Category[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPollDetails",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVoteCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isEligible",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
