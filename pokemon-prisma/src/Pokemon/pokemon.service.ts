import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { CreatePokemonDTO } from "./dto/create-pokemon.dto";
import { UpdatePokemonDTO } from "./dto/update-pokemon.dto";

@Injectable()
export class PokemonService {
    constructor(private readonly prisma: PrismaService) {}

    private readonly _include = {
        images: {
            select: {
                url: true
            }
        }
    }

    async create(data: CreatePokemonDTO) {
        return this.prisma.pokemon.create({
            data,
            include: this._include
        })
    }

    async list() {
        return this.prisma.pokemon.findMany({
            include: this._include
        })
    }

    async listOne(id: number) {
        return this.prisma.pokemon.findUnique({
            where: {
                id,
            },
            include: this._include
        })
    }

    async update(data: UpdatePokemonDTO, id: number) {
        return this.prisma.pokemon.update({
            data,
            include: this._include,
            where: { 
                id,
            },
        })
    }

    async delete(id: number) {
        return this.prisma.pokemon.delete({
            where: {
                id,
            }
        })
    }
}
