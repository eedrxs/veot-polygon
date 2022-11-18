/** @type import('hardhat/config').HardhatUserConfig */
require("dotenv").config()
require("@nomiclabs/hardhat-ethers")
require("@nomiclabs/hardhat-etherscan")

const {
  ALCHEMY_POLYGON_API_URL,
  ALCHEMY_ETHEREUM_API_URL,
  POLYGONSCAN_API_KEY,
  ETHERSCAN_API_KEY,
  PRIVATE_KEY,
} = process.env

module.exports = {
  solidity: {
    version: "0.8.9",
  },
  defaultNetwork: "polygon_mumbai",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: ALCHEMY_POLYGON_API_URL,
      accounts: [PRIVATE_KEY],
    },
    goerli: {
      url: ALCHEMY_ETHEREUM_API_URL,
      accounts: [PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: POLYGONSCAN_API_KEY,
  },
}
