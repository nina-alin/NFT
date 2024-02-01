const hre = require("hardhat");
import "dotenv/config";

async function main() {
  try {
    const Contract = await hre.ethers.getContractFactory("Palamon");
    const contract = await Contract.attach(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
    );

    await contract.multipleMint(10);
    // } catch (error) {
    //   console.error(error);
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
