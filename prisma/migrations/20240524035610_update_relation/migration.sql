/*
  Warnings:

  - You are about to drop the column `accountId` on the `Account` table. All the data in the column will be lost.
  - The `accountId` column on the `NFT` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[accountAddress]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountAddress` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountAddress` to the `NFT` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "NFT" DROP CONSTRAINT "NFT_accountId_fkey";

-- DropIndex
DROP INDEX "Account_accountId_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "accountId",
ADD COLUMN     "accountAddress" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "NFT" ADD COLUMN     "accountAddress" TEXT NOT NULL,
DROP COLUMN "accountId",
ADD COLUMN     "accountId" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "Account_accountAddress_key" ON "Account"("accountAddress");

-- AddForeignKey
ALTER TABLE "NFT" ADD CONSTRAINT "NFT_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "Account"("id") ON DELETE SET NULL ON UPDATE CASCADE;
