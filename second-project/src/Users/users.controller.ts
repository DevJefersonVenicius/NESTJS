import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";
import { UsersService } from "./users.service";

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Post()
    create(@Body() data: CreateUserDTO) { // @Body - RECEBI INFORMAÇÕES DO POST
        return this.userService.create(data)
    }

    @Get()
    async read() { // READ
        return this.userService.list()
    }
    
    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) { // READ COM ONE
        return this.userService.show(id)
    }

    @Get(':name')
    async readOneName(@Param('name') name: string) { 
        return this.userService.showName(name)
    }

    @Put(':id')
    async update(@Body() data: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) { // PUT 
        return this.userService.update(id, data)
    }
    
    @Patch(':id')
    async updatePartial(@Body() data: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) { // ATUALIZA APENAS UMA PARTE DO ELEMENTO
        return this.userService.updatePartial(id, data)
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number) { // DELETA POR ID
        return this.userService.delete(id)
    }
    
}
