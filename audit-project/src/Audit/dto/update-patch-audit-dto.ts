import { PartialType } from "@nestjs/mapped-types";
import { CreateAuditDTO } from "./create-audit-dto";

export class UpdatePatchAuditDTO extends PartialType(CreateAuditDTO){}
