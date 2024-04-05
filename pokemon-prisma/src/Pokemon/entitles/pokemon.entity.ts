import { Prisma } from '@prisma/client'

export class Pokemon implements Prisma.PokemonUncheckedCreateInput {
    id? : number
    name: string // Nome
    height: number // Altura
    images?: Prisma.ImageUncheckedCreateNestedManyWithoutPokemonInput // Imagens
}
