export type TMarketItem = {
  tokenId: string |null;
  seller: string;
  owner: string;
  price: string;
  sold?: boolean;
  image: string;
  name: string;
  description?: string;
  tokenURI?: string;

};
