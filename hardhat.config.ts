require("@nomiclabs/hardhat-waffle");
import "dotenv/config";

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      gasPrice: 225000000000,
      chainId: 31337,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
