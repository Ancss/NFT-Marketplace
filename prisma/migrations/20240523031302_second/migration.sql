/*
  Warnings:

  - You are about to drop the column `userId` on the `Like` table. All the data in the column will be lost.
  - The primary key for the `NFT` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `description` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the column `ownerId` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `NFT` table. All the data in the column will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[tokenId]` on the table `NFT` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountId` to the `Like` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `NFT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `NFT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `seller` to the `NFT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sold` to the `NFT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenId` to the `NFT` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tokenURI` to the `NFT` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_nftId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_userId_fkey";

-- DropForeignKey
ALTER TABLE "NFT" DROP CONSTRAINT "NFT_userId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT NOT NULL,
ALTER COLUMN "nftId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "NFT" DROP CONSTRAINT "NFT_pkey",
DROP COLUMN "description",
DROP COLUMN "file",
DROP COLUMN "id",
DROP COLUMN "name",
DROP COLUMN "ownerId",
DROP COLUMN "userId",
ADD COLUMN     "accountId" TEXT,
ADD COLUMN     "owner" TEXT NOT NULL,
ADD COLUMN     "price" INTEGER NOT NULL,
ADD COLUMN     "seller" TEXT NOT NULL,
ADD COLUMN     "sold" BOOLEAN NOT NULL,
ADD COLUMN     "tokenId" TEXT NOT NULL,
ADD COLUMN     "tokenURI" TEXT NOT NULL;

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "username" TEXT,
    "email" TEXT,
    "description" TEXT,
    "website" TEXT,
    "facebook" TEXT,
    "twitter" TEXT,
    "instagram" TEXT,
    "avatar" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_id_key" ON "Account"("id");

-- CreateIndex
CREATE UNIQUE INDEX "NFT_tokenId_key" ON "NFT"("tokenId");

-- AddForeignKey
ALTER TABLE "NFT" ADD CONSTRAINT "NFT_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_nftId_fkey" FOREIGN KEY ("nftId") REFERENCES "NFT"("tokenId") ON DELETE SET NULL ON UPDATE CASCADE;
