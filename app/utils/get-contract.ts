import { ethers } from "ethers";
import Polamon from "../../artifacts/contracts/Palamon.sol/Palamon.json";
import "dotenv/config";

const getContract = async () => {
  if (
    typeof window.ethereum === "undefined" ||
    !process.env.NEXT_PUBLIC_CONTRACT_ADDRESS
  ) {
    return null;
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum as any);

  // for debug purposes
  // const test = await provider.getCode(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS);
  // console.log(test);

  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    Polamon.abi,
    signer
  );

  return contract;
};

export default getContract;
