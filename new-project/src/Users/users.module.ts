import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { UsersService } from "./users.service";

@Module({
    imports: [PrismaModule],
    exports: [],
    controllers: [UsersController],
    providers: [UsersService],
})
export class UsersModule {

}
