/*
  Warnings:

  - The primary key for the `Personal` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Personal` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personal" (
    "personal_id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Personal_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("personal_id") SELECT "personal_id" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_personal_id_key" ON "Personal"("personal_id");
CREATE TABLE "new__PersonalStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PersonalStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Personal" ("personal_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PersonalStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__PersonalStudent" ("A", "B") SELECT "A", "B" FROM "_PersonalStudent";
DROP TABLE "_PersonalStudent";
ALTER TABLE "new__PersonalStudent" RENAME TO "_PersonalStudent";
CREATE UNIQUE INDEX "_PersonalStudent_AB_unique" ON "_PersonalStudent"("A", "B");
CREATE INDEX "_PersonalStudent_B_index" ON "_PersonalStudent"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
