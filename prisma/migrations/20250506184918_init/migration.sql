-- CreateTable
CREATE TABLE "Address" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip_code" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Residence" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "complement" TEXT NOT NULL,
    "address_id" INTEGER NOT NULL,
    CONSTRAINT "Residence_address_id_fkey" FOREIGN KEY ("address_id") REFERENCES "Address" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Resident" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "residence_id" INTEGER NOT NULL,
    CONSTRAINT "Resident_residence_id_fkey" FOREIGN KEY ("residence_id") REFERENCES "Residence" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "admin_residence" BOOLEAN NOT NULL,
    "admin_address" BOOLEAN NOT NULL,
    "ResidentToStaff_id" INTEGER NOT NULL,
    CONSTRAINT "Staff_ResidentToStaff_id_fkey" FOREIGN KEY ("ResidentToStaff_id") REFERENCES "Resident" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Resident_email_key" ON "Resident"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_ResidentToStaff_id_key" ON "Staff"("ResidentToStaff_id");
