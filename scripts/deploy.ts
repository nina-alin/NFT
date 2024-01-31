const hre = require("hardhat");
import "dotenv/config";

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("Palamon");
    const contract = await Contract.deploy(process.env.DEPLOY_ADDRESS);

    await contract.deployed();

    console.log(`contract deployed at ${contract.address}`);
  } catch (error) {
    console.error(error);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
