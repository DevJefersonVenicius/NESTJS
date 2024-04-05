import { IsInt, IsOptional, IsString } from "class-validator";
import { Pokemon } from "../entitles/pokemon.entity";
import { Prisma } from "@prisma/client";

export class CreatePokemonDTO extends Pokemon {
    @IsString()
    @IsOptional()
    name: string // Nome

    @IsInt()
    @IsOptional()
    heigth: number | null // Altura

    @IsOptional()
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput // Imagens

}
