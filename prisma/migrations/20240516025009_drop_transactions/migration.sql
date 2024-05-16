/*
  Warnings:

  - You are about to drop the `transactions` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[interviewedEmail]` on the table `interviewed` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[interviewedPhone]` on the table `interviewed` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "interviewed" ADD COLUMN     "interviewedPhone" TEXT;

-- DropTable
DROP TABLE "transactions";

-- CreateIndex
CREATE UNIQUE INDEX "interviewed_interviewedEmail_key" ON "interviewed"("interviewedEmail");

-- CreateIndex
CREATE UNIQUE INDEX "interviewed_interviewedPhone_key" ON "interviewed"("interviewedPhone");
