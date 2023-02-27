/*
  Warnings:

  - You are about to drop the column `rating` on the `Personal` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Personal_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Personal" ("id", "personal_id") SELECT "id", "personal_id" FROM "Personal";
DROP TABLE "Personal";
ALTER TABLE "new_Personal" RENAME TO "Personal";
CREATE UNIQUE INDEX "Personal_id_key" ON "Personal"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
