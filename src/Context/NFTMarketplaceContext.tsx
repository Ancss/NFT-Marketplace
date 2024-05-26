"use client";

import React, {
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import axios from "axios";
//INTERNAL  IMPORT
import { NFTMarketplaceAddress, NFTMarketplaceABI } from "./constants";
import { TLike, TMarketItem } from "@/types";
import { createNewNFT, getLikes } from "@/actions/NFT";
import { LoadingContext } from "./LoadingSpinnerProvider";

export type CreateNFTParams = {
  name: string;
  price: string;
  image: string;
  description: string;
  router: any;
};

export type CreateNFT = (params: CreateNFTParams) => Promise<void>;

// defined the type of value in the Context
export type TNFTMarketplaceContextType = {
  uploadToPinata: (file: File) => Promise<string | undefined>;
  checkIfWalletConnected: () => Promise<void>;
  connectWallet: () => Promise<void>;
  createNFT: CreateNFT;
  fetchNFTs: () => Promise<TMarketItem[]>;
  fetchMyNFTsOrListedNFTs: (type?: string) => Promise<TMarketItem[]>;
  buyNFT: (nftId: TMarketItem) => void;
  createSale: (
    url: string,
    formInputPrice: CreateNFTParams["price"],
    isReselling?: boolean,
    id?: string
  ) => void;
  currentAccount: string | null;
  titleData: string;
  setOpenError: (open: boolean) => void;
  openError: boolean;
  setError: Dispatch<SetStateAction<string>>;
  error: string | null;
  accountBalance: string;
  nfts: TMarketItem[],
  setNfts: Dispatch<SetStateAction<TMarketItem[]>>
  likes: TLike[],
  setLikes: Dispatch<SetStateAction<TLike[]>>
};

//---FETCHING SMART CONTRACT
const fetchContract = (
  signerOrProvider: ethers.Signer | ethers.providers.Provider
) =>
  new ethers.Contract(
    NFTMarketplaceAddress,
    NFTMarketplaceABI,
    signerOrProvider
  );
const web3Modal = globalThis.window && new Web3Modal();

//---CONNECTING WITH SMART CONTRACT
const connectingWithSmartContract = async () => {
  try {
    const connection = await web3Modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log("Something went wrong while connecting with contract", error);
  }
};
// listen NFT created
const onMarketItemCreatedEvent = async (
  tokenId: string,
  seller: string,
  owner: string,
  price: string,
  sold: boolean
) => {
  try {
    const contract = await connectingWithSmartContract();
    if (contract) {
      console.log("tokenId", tokenId);
      const tokenURI = await contract.tokenURI(tokenId);
      console.log("tokenURI", tokenURI);
      console.log({
        tokenId: tokenId.toString(),
        seller,
        owner,
        price: ethers.utils.formatUnits(price.toString(), "ether"),
        sold,
        tokenURI,
      });
      createNewNFT({
        tokenId: tokenId.toString(),
        seller,
        owner,
        price: ethers.utils.formatUnits(price.toString(), "ether"),
        sold,
        tokenURI,
      });
    }
  } catch (error) {
    console.log("createNFT in database has a problem ", error);
  }
};

export const NFTMarketplaceContext =
  React.createContext<TNFTMarketplaceContextType | null>(null);


export const NFTMarketplaceProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const titleData = "Discover, collect, and sell NFTs";

  //------USESTAT
  const [error, setError] = useState("");
  const [openError, setOpenError] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");
  const [accountBalance, setAccountBalance] = useState("");
  const router = useRouter();
  const { setLoading } = useContext(LoadingContext);
  const [nfts, setNfts] = useState<TMarketItem[]>([]);
  const [likes, setLikes] = useState<TLike[]>([]);

  //---CHECK IF WALLET IS CONNECTD
  const checkIfWalletConnected = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_accounts",
      });

      if (accounts && accounts.length) {
        setCurrentAccount(accounts[0]!);
        // console.log(accounts[0]);
      } else {
        // setError("No Account Found");
        // setOpenError(true);
        console.log("No account");
      }

      const connection = await web3Modal.connect();

      const provider = new ethers.providers.Web3Provider(connection);
      const getBalance = await provider.getBalance(accounts?.[0]!);
      const bal = ethers.utils.formatEther(getBalance);
      setAccountBalance(bal);
    } catch (error) {
      // setError("Something wrong while connecting to wallet");
      // setOpenError(true);
      console.log("not connected");
    }
  };

  useEffect(() => {
    checkIfWalletConnected();
  }, []);

  //---CONNET WALLET FUNCTION
  const connectWallet = async () => {
    try {
      if (!window.ethereum)
        return setOpenError(true), setError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
      setCurrentAccount(accounts[0]);

      // window.location.reload();
      connectingWithSmartContract();
    } catch (error) {
      // setError("Error while connecting to wallet");
      setOpenError(true);
    }
  };

  //---UPLOAD TO IPFS FUNCTION
  const uploadToPinata = async (file: File) => {
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
            pinata_secret_api_key:
              process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;

        return ImgHash;
      } catch (error) {
        console.log("Unable to upload image to Pinata");
      }
    }
  };

  //---CREATENFT FUNCTION
  const createNFT: CreateNFT = async ({
    name,
    price,
    image,
    description,
    router,
  }) => {
    if (!name || !description || !price || !image)
      return setError("Data Is Missing"), setOpenError(true);
    setLoading(true);
    const data = JSON.stringify({ name, description, image });
    try {
      const response = await axios({
        method: "POST",
        url: "https://api.pinata.cloud/pinning/pinJSONToIPFS",
        data: data,
        headers: {
          pinata_api_key: process.env.NEXT_PUBLIC_PINATA_API_KEY,
          pinata_secret_api_key: process.env.NEXT_PUBLIC_PINATA_SECRET_API_KEY,
          "Content-Type": "application/json",
        },
      });

      const url = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
      console.log(url);

      await createSale(url, price);
      router.push("/searchPage");
    } catch (error) {
      setLoading(false);
      setError("Error while creating NFT");
      setOpenError(true);
    }
  };

  //--- createSale FUNCTION
  const createSale: TNFTMarketplaceContextType["createSale"] = async (
    url,
    formInputPrice,
    isReselling?,
    id?
  ) => {
    try {
      console.log(url, formInputPrice, isReselling, id);
      const price = ethers.utils.parseUnits(formInputPrice, "ether");

      const contract = await connectingWithSmartContract();
      if (!contract) return;
      const listingPrice = await contract.getListingPrice();
      console.log(listingPrice, accountBalance)
      const transaction = !isReselling
        ? await contract.createToken(url, price, {
          value: listingPrice.toString(),
        })
        : await contract.resellToken(id, price, {
          value: listingPrice.toString(),
        });
      console.log(transaction)
      await transaction.wait();
      setLoading(false);
      console.log(transaction);
    } catch (error) {
      setError("error while creating sale");
      setOpenError(true);
      console.log(error);
    }
  };

  //--FETCHNFTS FUNCTION

  const fetchNFTs: TNFTMarketplaceContextType["fetchNFTs"] = async () => {
    try {
      const connection = await web3Modal.connect();
      const provider = new ethers.providers.Web3Provider(connection);

      const contract = fetchContract(provider);

      const data = await contract.fetchMarketItems();

      console.log(data);

      const items = await Promise.all(
        data.map(
          async ({
            tokenId,
            seller,
            owner,
            price: unformattedPrice,
          }: TMarketItem) => {
            const tokenURI = await contract.tokenURI(tokenId);

            const {
              data: { image, name, description },
            } = await axios.get(tokenURI, {});
            const price = ethers.utils.formatUnits(
              unformattedPrice.toString(),
              "ether"
            );
            return {
              price,
              tokenId: tokenId?.toString(),
              seller,
              owner,
              image,
              name,
              description,
              tokenURI,
            };
          }
        )
      );
      fetchLikes(items.map(item => item.tokenId))

      return items;

      // }
    } catch (error) {
      // setError("Error while fetching NFTS");
      // setOpenError(true);
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
    fetchNFTs().then((items: TMarketItem[]) => {
      console.log('fetchNFTs', items)
      setNfts(items?.reverse());
    });
  }, []);
  const fetchLikes = async (tokenIds: string[]) => {
    const likes:TLike[] = await Promise.all(tokenIds.map(async (tokenId) => await getLikes({ tokenId: tokenId!.toString() }).then(res=>res.data)))
    setLikes(likes)
  }

  //--FETCHING MY NFT OR LISTED NFTs
  const fetchMyNFTsOrListedNFTs: TNFTMarketplaceContextType["fetchMyNFTsOrListedNFTs"] =
    async (type?: string) => {
      try {
        if (currentAccount) {
          const contract = await connectingWithSmartContract();
          if (!contract) return [];
          const data =
            type == "fetchItemsListed"
              ? await contract.fetchItemsListed()
              : await contract.fetchMyNFTs();
          const items = await Promise.all(
            data.map(
              async ({
                tokenId,
                seller,
                owner,
                price: unformattedPrice,
              }: TMarketItem) => {
                const tokenURI = await contract.tokenURI(tokenId);
                const {
                  data: { image, name, description },
                } = await axios.get(tokenURI);
                const price = ethers.utils.formatUnits(
                  unformattedPrice.toString(),
                  "ether"
                );

                return {
                  price,
                  tokenId: tokenId?.toString(),
                  seller,
                  owner,
                  image,
                  name,
                  description,
                  tokenURI,
                };
              }
            )
          );
          return items;
        }
        return [];
      } catch (error) {
        // setError("Error while fetching listed NFTs");
        // setOpenError(true);
        return [];
      }
    };

  useEffect(() => {
    fetchMyNFTsOrListedNFTs();
  }, []);

  //---BUY NFTs FUNCTION
  const buyNFT: TNFTMarketplaceContextType["buyNFT"] = async (nft) => {
    try {
      const contract = await connectingWithSmartContract();
      console.log(contract);
      if (!contract) return;
      const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
      console.log(price, nft);

      const transaction = await contract.createMarketSale(nft.tokenId, {
        value: price,
      });

      await transaction.wait();
      router.push("/author");
    } catch (error) {
      setError("Error While buying NFT");
      setOpenError(true);
    }
  };

  // monitoring when user account change
  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      setCurrentAccount(accounts[0]);
    });
  }, []);
  // catch up when new Token Created
  useEffect(() => {
    let contract: ethers.Contract | undefined;
    async function onNewTokenCreated() {
      contract = await connectingWithSmartContract();
      contract && contract.on("MarketItemCreated", onMarketItemCreatedEvent);
    }
    onNewTokenCreated();
    return () => {
      contract?.off("MarketItemCreated", onMarketItemCreatedEvent);
    };
  }, [currentAccount]);
  return (
    <NFTMarketplaceContext.Provider
      value={{
        uploadToPinata,
        checkIfWalletConnected,
        connectWallet,
        createNFT,
        setError,
        fetchNFTs,
        fetchMyNFTsOrListedNFTs,
        buyNFT,
        createSale,
        currentAccount,
        titleData,
        setOpenError,
        openError,
        error,
        accountBalance,
        nfts,
        setNfts,
        likes,
        setLikes
      }}
    >
      {children}
    </NFTMarketplaceContext.Provider>
  );
};
