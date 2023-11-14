/*
  Warnings:

  - You are about to drop the column `email` on the `enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `enterprise` table. All the data in the column will be lost.
  - You are about to drop the column `enterpriseId` on the `quest` table. All the data in the column will be lost.
  - You are about to drop the column `phomeNumber` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `type_users` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[phomeNumber]` on the table `enterprise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cpnj]` on the table `enterprise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `enterprise` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phome_number]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[password]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `name` to the `enterprise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `enterprise` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enterprise_id` to the `quest` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phome_number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `typer_users_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "enterprise" DROP CONSTRAINT "enterprise_userId_fkey";

-- DropForeignKey
ALTER TABLE "quest" DROP CONSTRAINT "quest_enterpriseId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_id_fkey";

-- DropIndex
DROP INDEX "enterprise_email_key";

-- DropIndex
DROP INDEX "enterprise_userId_key";

-- AlterTable
ALTER TABLE "enterprise" DROP COLUMN "email",
DROP COLUMN "userId",
DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "quest" DROP COLUMN "enterpriseId",
ADD COLUMN     "enterprise_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "phomeNumber",
DROP COLUMN "username",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phome_number" TEXT NOT NULL,
ADD COLUMN     "typer_users_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "type_users";

-- CreateTable
CREATE TABLE "type_user" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "type_user_pkey" PRIMARY KEY ("id")
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
    "team_lab_id" INTEGER NOT NULL,
    "user_id" INTEGER,
    "siape" TEXT NOT NULL,

    CONSTRAINT "Professor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "type_user_description_key" ON "type_user"("description");

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
CREATE UNIQUE INDEX "enterprise_phomeNumber_key" ON "enterprise"("phomeNumber");

-- CreateIndex
CREATE UNIQUE INDEX "enterprise_cpnj_key" ON "enterprise"("cpnj");

-- CreateIndex
CREATE UNIQUE INDEX "enterprise_user_id_key" ON "enterprise"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_phome_number_key" ON "users"("phome_number");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_password_key" ON "users"("password");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_typer_users_id_fkey" FOREIGN KEY ("typer_users_id") REFERENCES "type_user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "enterprise" ADD CONSTRAINT "enterprise_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quest" ADD CONSTRAINT "quest_enterprise_id_fkey" FOREIGN KEY ("enterprise_id") REFERENCES "enterprise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratory_expertise" ADD CONSTRAINT "laboratory_expertise_lab_id_fkey" FOREIGN KEY ("lab_id") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "laboratory_expertise" ADD CONSTRAINT "laboratory_expertise_area_of_expertise_id_fkey" FOREIGN KEY ("area_of_expertise_id") REFERENCES "area_of_expertise"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_team_lab_id_fkey" FOREIGN KEY ("team_lab_id") REFERENCES "TeamLab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Professor" ADD CONSTRAINT "Professor_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
