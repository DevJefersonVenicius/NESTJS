import { Module } from "@nestjs/common";
import { PokemonControler } from "./pokemon.controller";
import { PokemonService } from "./pokemon.service";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
    imports: [PrismaModule],
    providers: [PokemonService],
    exports: [PokemonService],
    controllers: [PokemonControler],
})
export class PokemonModule {}
