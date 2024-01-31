import { ethers } from "ethers";
import Polamon from "../../artifacts/contracts/Palamon.sol/Palamon.json";
import "dotenv/config";

const getContract = async () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const contract = new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
    Polamon.abi,
    signer
  );

  return contract;
};

export default getContract;
