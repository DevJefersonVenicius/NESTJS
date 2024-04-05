import { Controller, Post, Body, Get, ParseIntPipe, Param, Put, Delete } from "@nestjs/common";
import { CreatePokemonDTO } from "./dto/create-pokemon.dto";
import { PokemonService } from "./pokemon.service";
import { UpdatePokemonDTO } from "./dto/update-pokemon.dto";

@Controller('pokemon')
export class PokemonControler {
    constructor(private readonly pokemonService: PokemonService) {}
    
    @Post()
    create(@Body() createPokemonDTO: CreatePokemonDTO) {
        return this.pokemonService.create(createPokemonDTO)
    }

    @Get()
    async list() {
        return this.pokemonService.list()
    }

    @Get(':id')
    async listOne(@Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.listOne(id)
    }

    @Put(':id')
    async update(@Body() updatePokemonDTO: UpdatePokemonDTO, @Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.update(updatePokemonDTO, id)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) {
        return this.pokemonService.delete(id)
    }

}
