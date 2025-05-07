/*
  Warnings:

  - You are about to drop the column `ResidentToStaff_id` on the `Staff` table. All the data in the column will be lost.

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
    "staff_id" INTEGER,
    "residence_id" INTEGER NOT NULL,
    CONSTRAINT "Resident_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Resident_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "Residence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Resident" ("email", "id", "lastName", "name", "password", "phone", "residence_id") SELECT "email", "id", "lastName", "name", "password", "phone", "residence_id" FROM "Resident";
DROP TABLE "Resident";
ALTER TABLE "new_Resident" RENAME TO "Resident";
CREATE UNIQUE INDEX "Resident_email_key" ON "Resident"("email");
CREATE UNIQUE INDEX "Resident_staff_id_key" ON "Resident"("staff_id");
CREATE TABLE "new_Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin_residence" BOOLEAN NOT NULL,
    "admin_address" BOOLEAN NOT NULL
);
INSERT INTO "new_Staff" ("admin_address", "admin_residence", "id") SELECT "admin_address", "admin_residence", "id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
