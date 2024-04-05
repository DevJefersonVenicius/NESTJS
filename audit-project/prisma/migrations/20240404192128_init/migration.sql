/*
  Warnings:

  - You are about to drop the `Audit` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Audit";

-- CreateTable
CREATE TABLE "audit" (
    "id" SERIAL NOT NULL,
    "sector" TEXT NOT NULL,
    "auditorName" TEXT NOT NULL,
    "auditType" TEXT NOT NULL,
    "descriptionProcess" TEXT NOT NULL,
    "dateAudit" TEXT NOT NULL,
    "additionalNotes" TEXT NOT NULL,
    "spending" TEXT NOT NULL,
    "numberEmployees" TEXT NOT NULL,
    "auditFindings" TEXT NOT NULL,
    "correctiveActions" TEXT NOT NULL,

    CONSTRAINT "audit_pkey" PRIMARY KEY ("id")
);
