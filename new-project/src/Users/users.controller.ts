import { Controller, Post, Body } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-users.dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}
    // Criamos o CRUD
    @Post()
    create(@Body() data: CreateUserDTO) {
        return this.userService.create(data)
    }
}
