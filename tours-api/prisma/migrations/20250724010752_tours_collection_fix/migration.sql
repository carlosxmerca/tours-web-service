/*
  Warnings:

  - The primary key for the `Tour` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Tour` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Tour" DROP CONSTRAINT "Tour_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL DEFAULT gen_random_uuid(),
ALTER COLUMN "description" SET DATA TYPE VARCHAR(4000),
ADD CONSTRAINT "Tour_pkey" PRIMARY KEY ("id");
