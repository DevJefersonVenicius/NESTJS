import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class CreateUserDTO { // DTO - SEMPRE SÃO CLASSES
    @IsString()
    name: string
    
    @IsEmail()
    email: string

    @IsString()
    cpf: string

    @IsStrongPassword({
        minLength: 6, // DEFININDO PADRÃO DE TAMANHO DA SENHA 
        minUppercase: 0, // DEFININDO QUE A SENHA PRECISA DE UM TOTAL ESPECIFICICADO DE LETRAS MAIUSCULAS
        minSymbols: 0, // DEFININDO QUE A SENHA PRECISA DE UM TOTAL ESPECIFICICADO DE SIMBOLOS
        minLowercase: 0, // DEFININDO QUE A SENHA PRECISA DE UM TOTAL ESPECIFICICADO DE LETRAS MINUSCULAS
        minNumbers: 0, // DEFININDO QUE A SENHA PRECISA DE UM TOTAL ESPECIFICICADO DE NÚMEROS
    })
    password: string
    
}
// @IsString() - É uma String
// @IsInt() - É um Number
// @IsEmail() - É um Email
// @IsStrongPassword() - É uma Senha
