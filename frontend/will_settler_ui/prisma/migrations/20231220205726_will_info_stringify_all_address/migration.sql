/*
  Warnings:

  - You are about to alter the column `will_Benefitors` on the `will_info` table. The data in that column could be lost. The data in that column will be cast from `LongBlob` to `VarChar(191)`.

*/
-- AlterTable
ALTER TABLE `will_info` MODIFY `will_Owner` VARCHAR(191) NOT NULL,
    MODIFY `will_Manager` VARCHAR(191) NOT NULL,
    MODIFY `will_Benefitors` VARCHAR(191) NOT NULL;
