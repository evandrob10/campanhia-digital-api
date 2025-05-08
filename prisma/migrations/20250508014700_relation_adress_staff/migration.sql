/*
  Warnings:

  - Made the column `staff_id` on table `Resident` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Resident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "residence_id" INTEGER NOT NULL,
    CONSTRAINT "Resident_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Resident_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "Residence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Resident" ("email", "id", "lastName", "name", "password", "phone", "residence_id", "staff_id") SELECT "email", "id", "lastName", "name", "password", "phone", "residence_id", "staff_id" FROM "Resident";
DROP TABLE "Resident";
ALTER TABLE "new_Resident" RENAME TO "Resident";
CREATE UNIQUE INDEX "Resident_email_key" ON "Resident"("email");
CREATE UNIQUE INDEX "Resident_staff_id_key" ON "Resident"("staff_id");
CREATE TABLE "new_Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin_residence" BOOLEAN NOT NULL DEFAULT false,
    "admin_address" BOOLEAN NOT NULL DEFAULT false,
    "Address_id" INTEGER,
    CONSTRAINT "Staff_Address_id_fkey" FOREIGN KEY ("Address_id") REFERENCES "Address" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("Address_id", "admin_address", "admin_residence", "id") SELECT "Address_id", "admin_address", "admin_residence", "id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
