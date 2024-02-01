import { createPublicClient, createWalletClient, custom, http } from "viem";
import { mainnet } from "viem/chains";

export const getAccount = async () => {
  const [account] = await window.ethereum!.request({
    method: "eth_requestAccounts",
  });

  return account;
};

export const getWalletClient = async () => {
  const wallet = createWalletClient({
    account: await getAccount(),
    chain: mainnet,
    transport: custom(window.ethereum!),
  });

  return wallet;
};

export const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});
