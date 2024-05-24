'use server'
import { z } from 'zod'
import { TMarketItem, TResponseData } from "@/types";
import { AccountSchema, NFTSchema } from '@/scheme';
import { db } from '@/db/prisma';
import { useId } from 'react';
import { Optional } from '@prisma/client/runtime/library';
import { Prisma, PrismaClient } from '@prisma/client';



export async function UpdateAccount(params: z.infer<typeof AccountSchema>): Promise<TResponseData> {
  console.log('UpdateAccount params', params)
  const { data, success, error } = AccountSchema.safeParse(params)
  console.log('UpdateAccount data:', data, success)
  if (!success) {
    return {
      success: false,
      error: error.message
    }
  }
  const account = await existAccountByAccountAddress(params.accountAddress)
  if (account == null) {
    return {
      success: false,
      error: 'Error: update account failure'
    }
  }
  try {
    const { avatar, username, email, description, website, facebook, twitter, instagram, } = data
    await db.account.update({
      where: {
        accountAddress: params.accountAddress
      },
      data: {
        avatar, username, email, description, website, facebook, twitter, instagram,
      }
    })
    return {
      success: true
    }
  } catch (error) {
    return {
      error: error,
      success: false
    }
  }

}


export async function existAccountByAccountAddress(accountAddress: string) {
  try {
    let account = await db.account.findUnique({
      where: {
        accountAddress: accountAddress,
      }
    })
    console.log('account',account)
    if (!account) {
      account = await db.account.create({
        data: {
          accountAddress: accountAddress,

        },
      });
    }
    return account
  } catch (error) {
    console.log('Error: query account has problem ', error)
    return null
  }

}