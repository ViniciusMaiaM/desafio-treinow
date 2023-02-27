-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" TEXT NOT NULL,
    CONSTRAINT "workouts_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_workouts" ("id", "start_time", "student_id") SELECT "id", "start_time", "student_id" FROM "workouts";
DROP TABLE "workouts";
ALTER TABLE "new_workouts" RENAME TO "workouts";
CREATE UNIQUE INDEX "workouts_id_key" ON "workouts"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
