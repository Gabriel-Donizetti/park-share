export interface CreateUserDto {
    nome: string
    email: string,
    senha: string,
    telefone?: string,
}

export interface UpdateUserDto {
    email?: string,
    telefone?: string,
}