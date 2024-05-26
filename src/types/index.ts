import { LikeSchema } from "@/scheme";
import { ZodError, z } from "zod";

export type TMarketItem = {
  tokenId: string | null;
  seller: string;
  owner: string;
  price: string;
  sold?: boolean;
  image: string;
  name: string;
  description?: string;
  tokenURI?: string;
};

export type TLike  = z.infer<typeof LikeSchema>

export type TResponseData = {
  success: Boolean,
  error?: string | ZodError | unknown,
  data?: any
}
