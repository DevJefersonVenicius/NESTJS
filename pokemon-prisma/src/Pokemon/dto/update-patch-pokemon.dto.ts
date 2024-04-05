import { PartialType } from "@nestjs/mapped-types";
import { CreatePokemonDTO } from "./create-pokemon.dto";

export class UpdatePatchPokemonDTO extends PartialType(CreatePokemonDTO) {}
