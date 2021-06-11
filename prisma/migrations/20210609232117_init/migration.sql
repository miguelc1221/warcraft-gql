-- CreateTable
CREATE TABLE "Race" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "faction" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "crestSrc" TEXT NOT NULL,
    "introTitle" TEXT NOT NULL,
    "introDescription" TEXT NOT NULL,
    "historyTitle" TEXT,
    "historyDescription" TEXT,
    "zoneName" TEXT,
    "zoneDescription" TEXT,
    "cityName" TEXT,
    "cityDescription" TEXT,
    "mountName" TEXT NOT NULL,
    "mountDescription" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "crestSrc" TEXT NOT NULL,
    "introTitle" TEXT NOT NULL,
    "introDescription" TEXT NOT NULL,
    "info" TEXT NOT NULL,
    "combatRoles" TEXT[],
    "resources" TEXT[],
    "armorType" TEXT[],
    "weapons" TEXT[],

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trait" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "raceId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Specialization" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feature" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "classId" INTEGER NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ClassToRace" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Race.name_unique" ON "Race"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Class.name_unique" ON "Class"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_ClassToRace_AB_unique" ON "_ClassToRace"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassToRace_B_index" ON "_ClassToRace"("B");

-- AddForeignKey
ALTER TABLE "Trait" ADD FOREIGN KEY ("raceId") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Specialization" ADD FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feature" ADD FOREIGN KEY ("classId") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToRace" ADD FOREIGN KEY ("A") REFERENCES "Class"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassToRace" ADD FOREIGN KEY ("B") REFERENCES "Race"("id") ON DELETE CASCADE ON UPDATE CASCADE;
