-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personal_id" TEXT NOT NULL,
    "student_id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    CONSTRAINT "Rating_personal_id_fkey" FOREIGN KEY ("personal_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Rating_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Personal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "personal_id" TEXT NOT NULL,
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
    CONSTRAINT "_PersonalStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Personal" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_PersonalStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Rating_id_key" ON "Rating"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Personal_id_key" ON "Personal"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Exercise_id_key" ON "Exercise"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_PersonalStudent_AB_unique" ON "_PersonalStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_PersonalStudent_B_index" ON "_PersonalStudent"("B");
