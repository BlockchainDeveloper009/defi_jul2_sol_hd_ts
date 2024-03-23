/*
  Warnings:

  - You are about to drop the column `Benefitors` on the `will_info` table. All the data in the column will be lost.
  - Added the required column `will_Benefitors` to the `Will_Info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `will_info` DROP COLUMN `Benefitors`,
    ADD COLUMN `will_Benefitors` LONGBLOB NOT NULL;
