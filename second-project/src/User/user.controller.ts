import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Put } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Controller('users')
export class UserController {

    @Post()
    async create(@Body() { name, email, cpf, password, contact, }: CreateUserDTO) {
        return {name, email, cpf, password, contact} // @Body - RECEBI INFORMAÇÕES DO POST
    }

    @Get()
    async read() { // READ
        return { users:[] }
    }

    @Get(':id')
    async readOne(@Param('id', ParseIntPipe) id: number) { // READ COM ONE
        return { user:{}, id }
    }

    @Put(':id')
    async update(@Body() {name, email, cpf, password, contact }: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) { // PUT - DELETE 
        return {
            method: 'PUT',
            name,
            email,
            cpf,
            password,
            contact,
            id
        }
    }
    
    @Patch(':id')
    async updatePartial(@Body() {name, email, cpf, password, contact}: UpdatePatchUserDTO, @Param('id', ParseIntPipe) id: number) { // ATUALIZA APENAS UMA PARTE DO ELEMENTO
        return {
            method: 'PATCH',
            name,
            email,
            cpf,
            password,
            contact,
            id
        }
    }

    @Delete(':id')
    async  delete(@Param('id', ParseIntPipe) id: number) { // DELETA POR ID
        return { id }
    }

}
