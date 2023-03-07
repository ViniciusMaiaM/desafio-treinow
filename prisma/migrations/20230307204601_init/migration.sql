-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "document" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "workouts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "start_time" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" TEXT,
    CONSTRAINT "workouts_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personal_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Rating_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Rating_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Personal" (
    "personal_id" TEXT NOT NULL PRIMARY KEY,
    CONSTRAINT "Personal_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Exercise" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "duration" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "personal_id" TEXT NOT NULL,
    CONSTRAINT "Exercise_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_PersonalStudent" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_PersonalStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Personal" ("personal_id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PersonalStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_document_key" ON "users"("document");

-- CreateIndex
CREATE UNIQUE INDEX "workouts_id_key" ON "workouts"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_personal_id_key" ON "Personal"("personal_id");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_id_key" ON "Exercise"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonalStudent_AB_unique" ON "_PersonalStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonalStudent_B_index" ON "_PersonalStudent"("B");
