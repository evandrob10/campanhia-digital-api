-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin_residence" BOOLEAN NOT NULL DEFAULT false,
    "admin_address" BOOLEAN NOT NULL DEFAULT false,
    "Address_id" INTEGER NOT NULL,
    CONSTRAINT "Staff_Address_id_fkey" FOREIGN KEY ("Address_id") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Staff" ("Address_id", "admin_address", "admin_residence", "id") SELECT "Address_id", "admin_address", "admin_residence", "id" FROM "Staff";
DROP TABLE "Staff";
ALTER TABLE "new_Staff" RENAME TO "Staff";
CREATE UNIQUE INDEX "Staff_Address_id_key" ON "Staff"("Address_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
