"use client";

import { MetaMaskProvider } from "@metamask/sdk-react";

type MetaMaskProviderWrapperProps = Readonly<{
  children: React.ReactNode;
}>;

const MetaMaskProviderWrapper = ({
  children,
}: MetaMaskProviderWrapperProps) => {
  return (
    <MetaMaskProvider
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: "http://example.com",
        },
      }}
    >
      {children}
    </MetaMaskProvider>
  );
};

export default MetaMaskProviderWrapper;
