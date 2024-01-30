"use client";

import { MdHomeFilled } from "react-icons/md";
import Link from "next/link";
import LinkButtons from "./link-buttons";
import { usePathname, useRouter } from "next/navigation";
import { useSDK } from "@metamask/sdk-react";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const { sdk, connected, balance } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
      router.push("/home");
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };

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
        </div>
      ) : null}
      <div className="flex gap-4 text-2xl items-center">
        <button
          className="rounded-full px-6 py-3 bg-secondary text-white text-lg hover:bg-white hover:text-secondary transition-colors"
          onClick={connect}
        >
          {connected ? balance : "Connect your wallet"}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
