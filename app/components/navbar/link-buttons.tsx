"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkButtonsProps = Readonly<{
  children: string;
  to: string;
}>;

const LinkButtons = ({ children, to }: LinkButtonsProps) => {
  const pathname = usePathname();

  const isHome = to === "/";

  return (
    <Link
      href={to}
      className={`rounded-full px-6 py-3 ${
        pathname === to || isHome
          ? "bg-secondary text-white hover:bg-white hover:text-secondary "
          : "text-secondary hover:bg-secondary hover:text-white"
      } transition-colors text-lg`}
    >
      {children}
    </Link>
  );
};

export default LinkButtons;
