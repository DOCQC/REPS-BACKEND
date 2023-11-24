-- CreateTable
CREATE TABLE "user_type" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "user_type_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "phone_number" TEXT NOT NULL,
    "user_type_id" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "enterprise" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "accountable" TEXT NOT NULL,
    "cpnj" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "isVisit" BOOLEAN NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "enterprise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "quest" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "enterprise_id" INTEGER NOT NULL,

    CONSTRAINT "quest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "area_of_expertise" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "area_of_expertise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "laboratory_expertise" (
    "id" SERIAL NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "lab_id" INTEGER NOT NULL,
    "area_of_expertise_id" INTEGER NOT NULL,

    CONSTRAINT "laboratory_expertise_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lab" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "abbreviation" TEXT NOT NULL,
    "url_img" TEXT NOT NULL,
    "descripition" TEXT NOT NULL,

    CONSTRAINT "Lab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamLab" (
    "id" SERIAL NOT NULL,
    "accountble" BOOLEAN NOT NULL,

    CONSTRAINT "TeamLab_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Professor" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "team_lab_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "siape" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AreaOfExpertiseToQuest" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_type_description_key" ON "user_type"("description");

-- CreateIndex
CREATE UNIQUE INDEX "user_phone_number_key" ON "user"("phone_number");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "enterprise_cpnj_key" ON "enterprise"("cpnj");

-- CreateIndex
CREATE UNIQUE INDEX "enterprise_user_id_key" ON "enterprise"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_name_key" ON "Lab"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_abbreviation_key" ON "Lab"("abbreviation");

-- CreateIndex
CREATE UNIQUE INDEX "Lab_url_img_key" ON "Lab"("url_img");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_user_id_key" ON "Professor"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "Professor_siape_key" ON "Professor"("siape");

-- CreateIndex
CREATE UNIQUE INDEX "_AreaOfExpertiseToQuest_AB_unique" ON "_AreaOfExpertiseToQuest"("A", "B");

-- CreateIndex
CREATE INDEX "_AreaOfExpertiseToQuest_B_index" ON "_AreaOfExpertiseToQuest"("B");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_user_type_id_fkey" FOREIGN KEY ("user_type_id") REFERENCES "user_type"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enterprise" ADD CONSTRAINT "enterprise_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quest" ADD CONSTRAINT "quest_enterprise_id_fkey" FOREIGN KEY ("enterprise_id") REFERENCES "enterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratory_expertise" ADD CONSTRAINT "laboratory_expertise_lab_id_fkey" FOREIGN KEY ("lab_id") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratory_expertise" ADD CONSTRAINT "laboratory_expertise_area_of_expertise_id_fkey" FOREIGN KEY ("area_of_expertise_id") REFERENCES "area_of_expertise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_team_lab_id_fkey" FOREIGN KEY ("team_lab_id") REFERENCES "TeamLab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaOfExpertiseToQuest" ADD CONSTRAINT "_AreaOfExpertiseToQuest_A_fkey" FOREIGN KEY ("A") REFERENCES "area_of_expertise"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AreaOfExpertiseToQuest" ADD CONSTRAINT "_AreaOfExpertiseToQuest_B_fkey" FOREIGN KEY ("B") REFERENCES "quest"("id") ON DELETE CASCADE ON UPDATE CASCADE;
