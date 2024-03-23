-- CreateTable
CREATE TABLE `Assets` (
    `asset_Id` VARCHAR(191) NOT NULL,
    `asset_Name` VARCHAR(191) NOT NULL,
    `asset_Amount` DOUBLE NOT NULL,
    `asset_Category` DOUBLE NOT NULL,
    `asset_isAvailable` INTEGER NOT NULL,
    `asset_Status` INTEGER NOT NULL,

    PRIMARY KEY (`asset_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Will_info` (
    `will_Id` INTEGER NOT NULL,
    `will_StartDate` INTEGER NOT NULL,
    `will_EndDate` INTEGER NOT NULL,
    `will_Owner` INTEGER NOT NULL,
    `will_Manager` BIGINT NOT NULL,
    `Benefitors` LONGBLOB NOT NULL,
    `will_Status` INTEGER NOT NULL,
    `will_asset_Id` VARCHAR(191) NOT NULL,
    `will_asset_Amount` DOUBLE NOT NULL,

    PRIMARY KEY (`will_Id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
