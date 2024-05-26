"use server";
import { z } from "zod";
import { TMarketItem } from "@/types";
import { AccountSchema, NFTSchema } from "@/scheme";
import { db } from "@/db/prisma";
import { useId } from "react";
import { Optional } from "@prisma/client/runtime/library";
import axios from "axios";
import { existAccountByAccountAddress } from "./Account";
import { revalidateTag } from "next/cache";

export const create2 = async (params: any) => {
  const { data: validData, success } = NFTSchema.safeParse(params);
  console.log(validData);
  return {
    success: true,
    data: params,
  };
};
export async function createNewNFT(data: z.infer<typeof NFTSchema>) {
  try {
    const { data: validData, success } = NFTSchema.safeParse(data);
    if (!success) {
      return {
        error: "Error: nft parameter has some problem",
        success: false,
      };
    }

    const account = await existAccountByAccountAddress(validData.seller);
    if (account == null) {
      return {
        error: "Error: query account has problem",
        success: false,
      };
    }
    const { data: imageData } = await axios.get(validData.tokenURI);
    const res = await db.nFT.create({
      data: {
        tokenId: validData.tokenId,
        seller: validData.seller,
        owner: validData.owner,
        price: validData.price,
        sold: validData.sold,
        tokenURI: validData.tokenURI,
        accountId: account.id,
        accountAddress: account.accountAddress,
        name: imageData.name,
        image: imageData.image,
        description: imageData.description,
      },
    });
    return {
      success: true,
      data: JSON.stringify(res),
    };
  } catch (error) {
    return {
      error: "nft parameter has some problem " + error,
      success: false,
    };
  }
}

export const getLikes = async ({ tokenId }: { tokenId: string }) => {
  try {
    const likes = db.like.findMany({
      where: { nFTTokenId: tokenId },
    });
    return {
      success: true,
      data: JSON.parse(JSON.stringify(likes)),
    };
  } catch (error) {
    return {
      success: false,
      error: error,
    };
  }
};

export const LikeOrDislike = async ({
  tokenId,
  accountAddress,
}: {
  tokenId: string;
  accountAddress: string;
}) => {
  let like = await db.like.findFirst({
    where: {
      nFTTokenId: tokenId,
      accountAddress: accountAddress,
    },
  });
  if (!like) {
    like = await db.like
      .create({
        data: {
          accountAddress: accountAddress,
          nFTTokenId: tokenId,
          liked: 1,
        },
      })
      .then()
      .finally();
  }
  db.like.update({
    where: {
      id: like.id,
    },
    data: {
      liked: like.liked === 0 ? 1 : 0,
    },
  });
  revalidateTag('Like')
  return {
    success: true,
    data: JSON.parse(JSON.stringify(like)),
  };
};

type LikeType = 0 | 1; //0 disLike 1 like
