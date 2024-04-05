import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-user-dto"; 

export class UpdatePatchUserDTO extends PartialType(CreateUserDTO) {} //  POSSO LISTAR APENAS O QUE QUERO COM O PATCH
