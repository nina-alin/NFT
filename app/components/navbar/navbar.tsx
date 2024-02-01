"use client";

import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import LinkButtons from "./link-buttons";
import { usePathname } from "next/navigation";
import { useSDK } from "@metamask/sdk-react";
import React, { useState } from "react";

const Navbar = () => {
  const { sdk, connected, connecting, balance } = useSDK();
  const pathname = usePathname();

  const [account, setAccount] = useState<string>();

  const connect = async () => {
    try {
      const accounts = (await sdk?.connect()) as string[];
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

  if (connecting) {
    return <p>Loading...</p>;
  }

  const isHome = pathname === "/";

  return (
    <div className="flex justify-between items-center font-bold">
      <Link
        href={"/"}
        className="rounded-full p-2 border-secondary border-4 text-xl hover:bg-secondary hover:text-white transition-colors"
      >
        <MdHomeFilled />
      </Link>
      {!isHome ? (
        <div className="flex gap-2">
          <LinkButtons to="/home">Home</LinkButtons>
          <LinkButtons to="/my-cards">My Cards</LinkButtons>
          <LinkButtons to="/create">Create</LinkButtons>
        </div>
      ) : null}
      <div className="flex gap-4 text-2xl items-center">
        {!connected && !account ? (
          <button
            className="rounded-full px-6 py-3 bg-secondary text-white text-lg hover:bg-white hover:text-secondary transition-colors"
            onClick={connect}
          >
            Connect your wallet
          </button>
        ) : (
          <div className="rounded-full px-6 py-3 bg-secondary text-white text-lg">
            {balance}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
