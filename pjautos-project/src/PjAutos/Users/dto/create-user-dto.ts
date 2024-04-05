import { Type } from "class-transformer"
import {IsNotEmpty, IsNumber, IsString, IsStrongPassword} from "class-validator"

export class CreateUserDTO {
    @IsString()
    name: string

    @IsString()
    email: string
    
    @IsNotEmpty() // não pode ser em branco
    @IsNumber({}, {message:'O CPF não pode ser vazio'})
    @Type(() => Number)
    cpf: number

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 1
    })
    password: string

}
