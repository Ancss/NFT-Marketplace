/*
  Warnings:

  - You are about to drop the column `accountId` on the `Like` table. All the data in the column will be lost.
  - You are about to drop the column `nFTId` on the `Like` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_accountId_fkey";

-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_nFTId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP COLUMN "accountId",
DROP COLUMN "nFTId",
ADD COLUMN     "accountAddress" TEXT,
ADD COLUMN     "nFTTokenId" TEXT;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_nFTTokenId_fkey" FOREIGN KEY ("nFTTokenId") REFERENCES "NFT"("tokenId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_accountAddress_fkey" FOREIGN KEY ("accountAddress") REFERENCES "Account"("accountAddress") ON DELETE SET NULL ON UPDATE CASCADE;
