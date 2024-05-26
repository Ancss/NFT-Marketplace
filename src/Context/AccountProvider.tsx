"use client";
import { existAccountByAccountAddress } from "@/actions/Account";
import { AccountSchema } from "@/scheme";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { z } from "zod";
import { NFTMarketplaceContext } from "./NFTMarketplaceContext";

export type AccountType = Partial<z.infer<typeof AccountSchema>>;

const accountData: AccountType = {
  username: "",
  email: "",
  description: "",
  website: "",
  facebook: "",
  twitter: "",
  instagram: "",
  avatar: "",
  accountAddress: "",
};

export const AccountContext = createContext<{ account: AccountType, setAccount: Dispatch<SetStateAction<AccountType>> } | null>(null);

export const useLoading = () => useContext(AccountContext);
export const AccountProvider = ({ children }: { children: ReactNode }) => {
  const { currentAccount } = useContext(NFTMarketplaceContext)!;
  const [account, setAccount] = useState<AccountType>(accountData);
  useEffect(() => {
    if (!currentAccount) return;
    const getDetail = async () => {
      const account = await existAccountByAccountAddress(currentAccount);
      console.log(account);
      setAccount({
        avatar: account?.avatar || "",
        username: account?.username || "",
        email: account?.email || "",
        description: account?.description || "",
        website: account?.website || "",
        facebook: account?.facebook || "",
        twitter: account?.twitter || "",
        instagram: account?.instagram || "",
        accountAddress: account?.accountAddress || currentAccount,
      });
    };
    getDetail();
  }, [currentAccount]);
  return (
    <AccountContext.Provider
      value={{
        account: account,
        setAccount: setAccount,
      }}
    >
      {children}
    </AccountContext.Provider>
  );
};
