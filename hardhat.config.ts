require("@nomiclabs/hardhat-waffle");
const TEST_PRIVATE_KEY =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";
module.exports = {
  solidity: "0.8.20",
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545/",
      gasPrice: 225000000000,
      chainId: 31337,
      accounts: [`0x${TEST_PRIVATE_KEY}`],
      /*mining: {
        auto: false,
        interval: 5000, // Réglez la durée entre les blocs sur 5 secondes (vous pouvez ajuster cette valeur selon vos besoins)
      },*/
    },
  },
};
