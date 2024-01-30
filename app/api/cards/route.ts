import { Alchemy, Network } from "alchemy-sdk";
import { NextResponse } from "next/server";

export async function GET() {
  const config = {
    apiKey: "nsDfDL2R-A5ukesGSZ5bceyJdkdHUnD1",
    network: Network.ETH_MAINNET,
  };
  const alchemy = new Alchemy(config);

  // Contract address
  const address = "0x5B38Da6a701c568545dCfcB03FcB875f56beddC4";

  // Flag to omit metadata
  const omitMetadata = false;

  // Get all NFTs
  const { nfts } = await alchemy.nft.getNftsForContract(address, {
    omitMetadata: omitMetadata,
  });

  let i = 1;

  for (let nft of nfts) {
    console.log(`${i}. ${nft.rawMetadata.image}`);
    i++;
  }

  return NextResponse.json(nfts); 
}
