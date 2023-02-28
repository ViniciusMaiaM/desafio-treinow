-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personal_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Rating_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Rating_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Rating" ("id", "personal_id", "student_id", "value") SELECT "id", "personal_id", "student_id", "value" FROM "Rating";
DROP TABLE "Rating";
ALTER TABLE "new_Rating" RENAME TO "Rating";
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating"("id");
CREATE TABLE "new_workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" TEXT,
    CONSTRAINT "workouts_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_workouts" ("id", "start_time", "student_id") SELECT "id", "start_time", "student_id" FROM "workouts";
DROP TABLE "workouts";
ALTER TABLE "new_workouts" RENAME TO "workouts";
CREATE UNIQUE INDEX "workouts_id_key" ON "workouts"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
