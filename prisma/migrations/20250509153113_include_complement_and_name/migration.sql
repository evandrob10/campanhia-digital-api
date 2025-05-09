/*
  Warnings:

  - You are about to drop the column `complement` on the `Residence` table. All the data in the column will be lost.
  - Added the required column `complement` to the `Address` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "street" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL,
    "complement" TEXT NOT NULL
);
INSERT INTO "new_Address" ("city", "district", "id", "number", "state", "street", "zip_code") SELECT "city", "district", "id", "number", "state", "street", "zip_code" FROM "Address";
DROP TABLE "Address";
ALTER TABLE "new_Address" RENAME TO "Address";
CREATE TABLE "new_Residence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "address_id" INTEGER NOT NULL,
    CONSTRAINT "Residence_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Residence" ("address_id", "id") SELECT "address_id", "id" FROM "Residence";
DROP TABLE "Residence";
ALTER TABLE "new_Residence" RENAME TO "Residence";
CREATE UNIQUE INDEX "Residence_name_key" ON "Residence"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
