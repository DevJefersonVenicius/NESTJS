import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateAuditDTO } from "./dto/create-audit-dto";
import { UpdatePatchAuditDTO } from "./dto/update-patch-audit-dto";
import { UpdateAuditDTO } from "./dto/update-audit-dto";
import { NotFoundException } from "@nestjs/common";

@Injectable()
export class AuditService {
    constructor(private readonly prisma: PrismaService) {}

    async create({sector, spending, descriptionProcess, numberEmployees, auditorName, auditFindings, correctiveActions, dateAudit, auditType, additionalNotes}: CreateAuditDTO) {
        return this.prisma.audit.create({
            data: {
                sector,
                spending,
                descriptionProcess,
                numberEmployees,
                auditorName,
                auditFindings,
                correctiveActions,
                dateAudit,
                auditType,
                additionalNotes,
            } 
        })
    }

    async list() {
        return this.prisma.audit.findMany()
    }

    async show(id: number) {
        return this.prisma.audit.findUnique({
            where: {
                id,
            }
        })
    }

    async update(id: number, data: UpdateAuditDTO) {
        if (!(await this.show(id))) { 
            throw new NotFoundException(`Auditoria de Id ${id} não encontrado.`)
        }
        return this.prisma.audit.update({
            data,
            where: {
                id,
            }
        })
    }

    async updatePartial(id: number, {sector, spending, descriptionProcess, numberEmployees, auditorName, auditFindings, correctiveActions, dateAudit, auditType, additionalNotes}: UpdatePatchAuditDTO) {
        const data: any = {}

        if (!(await this.show(id))) { 
            throw new NotFoundException(`Auditoria de Id ${id} não encontrado.`)
        }

        if (sector) {
            data.sector = sector
        }

        if (spending) {
            data.spending = spending
        }

        if (descriptionProcess) {
            data.descriptionProcess = descriptionProcess
        }

        if (numberEmployees) {
            data.numberEmployees = numberEmployees
        }

        if (auditorName) {
            data.auditorName = auditorName
        }

        if (auditFindings) {
            data.auditFindings = auditFindings
        }

        if (correctiveActions) {
            data.correctiveActions = correctiveActions
        }

        if (dateAudit) {
            data.dateAudit = dateAudit
        }

        if (auditType) {
            data.auditType = auditType
        }

        if (additionalNotes) {
            data.additionalNotes = additionalNotes
        }

        return this.prisma.audit.update({
            data, 
            where: {
                id,
            }
        })
    }

        async delete(id: number) {
        if (!(await this.show(id))) { 
            throw new NotFoundException(`Auditoria de Id ${id} não encontrada.`)
        }

        return this.prisma.audit.delete({
            where: {
                id,
            }
        })
    }
}
