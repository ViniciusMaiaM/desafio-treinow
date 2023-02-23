-- CreateTable
CREATE TABLE "workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" TEXT NOT NULL,
    CONSTRAINT "workouts_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "workouts_id_key" ON "workouts"("id");
