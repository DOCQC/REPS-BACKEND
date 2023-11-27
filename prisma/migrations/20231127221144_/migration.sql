/*
  Warnings:

  - You are about to drop the column `descripition` on the `Lab` table. All the data in the column will be lost.
  - You are about to drop the column `accountble` on the `TeamLab` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[description]` on the table `area_of_expertise` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `Lab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `accountable` to the `TeamLab` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lab_id` to the `TeamLab` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Lab" DROP COLUMN "descripition",
ADD COLUMN     "description" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TeamLab" DROP COLUMN "accountble",
ADD COLUMN     "accountable" BOOLEAN NOT NULL,
ADD COLUMN     "lab_id" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "area_of_expertise_description_key" ON "area_of_expertise"("description");

-- AddForeignKey
ALTER TABLE "TeamLab" ADD CONSTRAINT "TeamLab_lab_id_fkey" FOREIGN KEY ("lab_id") REFERENCES "Lab"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
