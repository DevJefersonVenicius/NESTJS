import { IsDateString, IsNumberString, IsString } from "class-validator";

export class CreateAuditDTO {
    @IsString({message:'sector: Passe o nome do setor a ser auditado.'})
    sector: string // Nome do setor

    @IsString({ message:'auditorName: Informe o responsável pela auditoria.'})
    auditorName: string // Nome do responsável pela auditoria

    @IsString({message:'Digite o tipo de auditoria.'})
    auditType: string // Tipo de auditoria

    @IsString({message:'descriptionProcess: Digite a descrição do processo auditado.'})
    descriptionProcess: string // Descrição do precesso auditado

    @IsDateString({}, {message:'dateAudit: Digite a data da auditoria.'})
    dateAudit: string // Data da auditoria

    @IsString({message:'additionalNotes: Inclua observações adicionais.'})
    additionalNotes: string // Observações adicionais
    
    @IsNumberString({}, {message:'spending: Passe os gastos do setor.'})
    spending: string // Gastos do setor

    @IsNumberString({}, {message:'employees: Digite o número de funcionarios do setor.'})
    numberEmployees: string // Número de funcionarios
    
    @IsString({ message:'auditiFindings: Descreva as conclusões da auditoria.'})
    auditFindings: string // Conclusões da auditoria
    
    @IsString({ message:'correctiveActions: Indique as ações corretivas recomendadas.'})
    correctiveActions: string // Ações corretivas recomendadas

}
