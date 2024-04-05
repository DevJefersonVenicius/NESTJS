import { PartialType } from "@nestjs/mapped-types";
import { CreateCarEnjoyDTO } from "./create-car_enjoy-dto";

export class UpdatePatchCarEnjoyDTO extends PartialType(CreateCarEnjoyDTO) {}
