-- CreateTable
CREATE TABLE "Lot" (
    "id" TEXT NOT NULL,
    "block" TEXT NOT NULL,
    "lot" INTEGER NOT NULL,
    "area" DECIMAL(10,2) NOT NULL,
    "price_x_m2" DECIMAL(10,2) NOT NULL,
    "total_price" DECIMAL(10,2) NOT NULL,
    "availability_status_id" INTEGER NOT NULL,
    "price_visibility" BOOLEAN NOT NULL DEFAULT true,
    "created_by" VARCHAR(50) NOT NULL,
    "updated_by" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "record_status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Lot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_by" VARCHAR(50) NOT NULL,
    "updated_by" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "record_status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterTable" (
    "id" SERIAL NOT NULL,
    "parent_id" INTEGER,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_by" VARCHAR(50) NOT NULL,
    "updated_by" VARCHAR(50),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "record_status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "MasterTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Lot_block_lot_idx" ON "Lot"("block", "lot");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "Lot" ADD CONSTRAINT "Lot_availability_status_id_fkey" FOREIGN KEY ("availability_status_id") REFERENCES "MasterTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
