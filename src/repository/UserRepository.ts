import prisma from "@prisma/Prisma";
import { CreateUserDto } from "src/interfaces/UserDto";


class UserRepository {

    async create(u: CreateUserDto) {
        const user = await prisma.usuario.create({
            data: {
                nome: u.nome,
                email: u.email,
                senha: u.senha,
                telefone: u.telefone
            },
        })
        return user;
    }

    async update(name: string, id: number) {
        const user = await prisma.usuario.update({
            where: {
                id_usuario: id
            },
            data: {
                nome: name
            }
        })

        return user
    }

    async delete(id: number) {
        const user = await prisma.usuario.delete({
            where: {
                id_usuario: id
            },
        })

        return user
    }

}

export default UserRepository;