import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user-dto";
import { PrismaService } from "src/prisma/prisma.service";
import { UpdateUserDTO } from "./dto/update-user-dto";
import { UpdatePatchUserDTO } from "./dto/update-patch-user-dto";

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) {}
    
    async create({name, email, cpf, password}: CreateUserDTO) {
        return this.prisma.user.create({
            data: {
                name,
                email,
                cpf,
                password,
            }
        })
    }
    
    async list() { // list - LISTA BODY
        return this.prisma.user.findMany()
    }

    async show(id: number) {
        return this.prisma.user.findUnique({
            where: {
                id,
            }
        })
    }

    async showName(name: string) { 
        return this.prisma.user.findFirst({
            where: {
                name: name,
            }
        })
    }

    async update(id: number, data: UpdateUserDTO) {
        if (!(await this.show(id))) { // QUANDO O ID NÃO EXISTIR
            throw new NotFoundException(`Usuário de Id ${id} não encontrado.`)
        }
        return this.prisma.user.update({
            data,
            where: {
                id,
            }
        })
    }

    async updatePartial(id: number, {name, email, cpf, password}: UpdatePatchUserDTO) {
        
        const data: any = {}

        if (!(await this.show(id))) { // QUANDO O ID NÃO EXISTIR
            throw new NotFoundException(`Usuário de Id ${id} não encontrado.`)
        }

        if (name) {
            data.name = name
        }

        if (email) {
            data.email = email
        }

        if (cpf) {
            data.cpf = cpf
        }

        if (password) {
            data.password = password
        }
        
        return this.prisma.user.update({
            data, 
            where: {
                id,
            }
        })
    }

    async delete(id: number) {
        if (!(await this.show(id))) { // QUANDO O ID NÃO EXISTIR
            throw new NotFoundException(`Usuário de Id ${id} não encontrado.`)
        }
        return this.prisma.user.delete({
            where: {
                id,
            }
        })
    }

}
