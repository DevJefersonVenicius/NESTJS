-- CreateTable
CREATE TABLE "Audit" (
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

    CONSTRAINT "Audit_pkey" PRIMARY KEY ("id")
);
