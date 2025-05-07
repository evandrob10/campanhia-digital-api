/*
  Warnings:

  - You are about to drop the column `telefone` on the `Resident` table. All the data in the column will be lost.

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
    "residence_id" INTEGER NOT NULL,
    CONSTRAINT "Resident_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "Residence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Resident" ("email", "id", "lastName", "name", "password", "phone", "residence_id") SELECT "email", "id", "lastName", "name", "password", "phone", "residence_id" FROM "Resident";
DROP TABLE "Resident";
ALTER TABLE "new_Resident" RENAME TO "Resident";
CREATE UNIQUE INDEX "Resident_email_key" ON "Resident"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
