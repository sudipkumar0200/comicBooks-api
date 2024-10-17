-- CreateEnum
CREATE TYPE "Condition" AS ENUM ('USED', 'NEW');

-- CreateTable
CREATE TABLE "ComicBook" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION,
    "pages" INTEGER NOT NULL,
    "condition" "Condition" NOT NULL DEFAULT 'NEW',
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ComicBook_pkey" PRIMARY KEY ("id")
);
