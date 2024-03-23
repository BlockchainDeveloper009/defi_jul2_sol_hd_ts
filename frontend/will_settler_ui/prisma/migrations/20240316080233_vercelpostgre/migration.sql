-- CreateTable
CREATE TABLE "AppConfig" (
    "id" SERIAL NOT NULL,
    "contract_info_id" INTEGER NOT NULL,
    "application_name" TEXT NOT NULL,
    "environment" TEXT NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AppConfig_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Assets" (
    "asset_Id" TEXT NOT NULL,
    "asset_Name" TEXT NOT NULL,
    "asset_Amount" DOUBLE PRECISION NOT NULL,
    "asset_Category" DOUBLE PRECISION NOT NULL,
    "asset_isAvailable" INTEGER NOT NULL,
    "asset_Status" INTEGER NOT NULL,
    "contract_Addr" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Assets_pkey" PRIMARY KEY ("asset_Id")
);

-- CreateTable
CREATE TABLE "will_info" (
    "will_Id" INTEGER NOT NULL,
    "will_StartDate" INTEGER NOT NULL,
    "will_EndDate" INTEGER NOT NULL,
    "will_Owner" TEXT NOT NULL,
    "will_Manager" TEXT NOT NULL,
    "will_Status" INTEGER NOT NULL,
    "will_asset_Id" TEXT NOT NULL,
    "will_asset_Amount" DOUBLE PRECISION NOT NULL,
    "will_Benefitors" TEXT NOT NULL,
    "contract_Addr" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "will_info_pkey" PRIMARY KEY ("will_Id")
);

-- CreateTable
CREATE TABLE "contract_info" (
    "id" SERIAL NOT NULL,
    "contract_Addr" TEXT NOT NULL,
    "contract_Name" TEXT NOT NULL,
    "contract_Version" TEXT NOT NULL,
    "contract_Owner_Addr" TEXT NOT NULL,
    "deployed_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "contract_Abi" TEXT NOT NULL,

    CONSTRAINT "contract_info_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "asset_ccy" (
    "id" SERIAL NOT NULL,
    "asset_ccy_Symbol" TEXT NOT NULL,
    "asset_ccy_Name" TEXT NOT NULL,
    "asset_ccy_Decimals" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "asset_ccy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BetaUsers" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BetaUsers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "asset_ccy_asset_ccy_Symbol_key" ON "asset_ccy"("asset_ccy_Symbol");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "BetaUsers_email_key" ON "BetaUsers"("email");
