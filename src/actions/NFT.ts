'use server'
import { z } from 'zod'
import { TMarketItem } from "@/types";
import { AccountSchema, NFTSchema } from '@/scheme';
import { db } from '@/db/prisma';
import { useId } from 'react';
import { Optional } from '@prisma/client/runtime/library';
import axios from 'axios';
import { existAccountByAccountAddress } from './Account';

export const create2 = async (params: any) => {
  const {
    data: validData, success
  } = NFTSchema.safeParse(params)
  console.log(validData)
  return {
    success: true,
    data: params
  }
}
export async function createNewNFT(data: any) {
  try {
    const {
      data: validData, success
    } = NFTSchema.safeParse(data)
    if (!success) {
      return {
        error: Error('Error: nft parameter has some problem '),
        success: false,
      }
    }

    const account = await existAccountByAccountAddress(validData.seller)
    if (account == null) {
      return {
        error: Error('Error: query account has problem'),
        success: false
      }
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
        description: imageData.description
      }
    })
    return {
      success: true,
      data: JSON.stringify(res)
    }
  } catch (error) {
    return {
      error: Error('nft parameter has some problem ' + error),
      success: false
    }
  }
}
