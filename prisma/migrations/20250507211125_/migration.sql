/*
  Warnings:

  - A unique constraint covering the columns `[complement]` on the table `Residence` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Residence_complement_key" ON "Residence"("complement");
