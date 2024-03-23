/*
  Warnings:

  - Added the required column `contract_Addr` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Assets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contract_Addr` to the `will_info` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `will_info` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `assets` ADD COLUMN `contract_Addr` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `will_info` ADD COLUMN `contract_Addr` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- CreateTable
CREATE TABLE `AppConfig` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contract_info_id` INTEGER NOT NULL,
    `application_name` VARCHAR(191) NOT NULL,
    `environment` VARCHAR(191) NOT NULL,
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `contract_info` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `contract_Addr` VARCHAR(191) NOT NULL,
    `contract_Name` VARCHAR(191) NOT NULL,
    `contract_Version` VARCHAR(191) NOT NULL,
    `contract_Owner_Addr` VARCHAR(191) NOT NULL,
    `deployed_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `contract_Abi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `asset_ccy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `asset_ccy_Symbol` VARCHAR(191) NOT NULL,
    `asset_ccy_Name` VARCHAR(191) NOT NULL,
    `asset_ccy_Decimals` DOUBLE NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `asset_ccy_asset_ccy_Symbol_key`(`asset_ccy_Symbol`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `email_verified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
