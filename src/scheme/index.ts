import { z } from 'zod';

const AccountSchema = z.object({
  id: z.string(),
  username: z.string().optional().nullable(),
  email: z.string().email().optional().nullable(),
  description: z.string().optional().nullable(),
  website: z.string().url().optional().nullable(),
  facebook: z.string().optional().nullable(),
  twitter: z.string().optional().nullable(),
  instagram: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  likes: z.array(z.lazy(() => LikeSchema)).optional(),
  nfts: z.array(z.lazy(() => NFTSchema)).optional(),
});

const NFTSchema = z.object({
  tokenId: z.string(),
  seller: z.string(),
  owner: z.string(),
  price: z.string(),
  sold: z.boolean(),
  tokenURI: z.string(),
  likes: z.array(z.lazy(() => LikeSchema)).optional(),
  accountId: z.string(),
});

const LikeSchema = z.object({
  id: z.number().int(),
  accountId: z.string(),
  liked: z.enum(['1', '0', '-1']),
  nftId: z.string().optional(),
});

export { AccountSchema, NFTSchema, LikeSchema };
