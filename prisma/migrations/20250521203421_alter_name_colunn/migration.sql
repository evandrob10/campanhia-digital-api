/*
  Warnings:

  - You are about to drop the column `ip` on the `Call` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Call" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "VisitantIP" TEXT,
    "callActive" BOOLEAN NOT NULL DEFAULT true,
    "callAnswered" BOOLEAN NOT NULL DEFAULT false,
    "CallDateTime" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ResidentID" INTEGER NOT NULL,
    CONSTRAINT "Call_ResidentID_fkey" FOREIGN KEY ("ResidentID") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Call" ("CallDateTime", "ResidentID", "callActive", "callAnswered", "id") SELECT "CallDateTime", "ResidentID", "callActive", "callAnswered", "id" FROM "Call";
DROP TABLE "Call";
ALTER TABLE "new_Call" RENAME TO "Call";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
