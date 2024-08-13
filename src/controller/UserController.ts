import UserService from "@service/UserService";
import { Request, Response } from "express";
import { CreateUserDto } from "src/interfaces/UserDto";

const service = new UserService();

export class UserController {

    static async create(req: Request, res: Response) {
        try {
            const { nome, email, senha, telefone } = req.body;

            const user: CreateUserDto = {
                nome,
                email,
                senha,
                telefone: telefone || null
            }

            const resService = await service.create(user)
            return res.status(200).json({ resService });
        } catch (e) {
            return res.status(502).json({ message: (e as Error).message });
        }
    }


    static async login(req: Request, res: Response) {
        try {
            const { email, senha } = req.body;

            const resService = await service.login(email, senha)
            return res.status(200).json({ resService });
        } catch (e) {
            return res.status(502).json({ message: (e as Error).message });
        }
    }

    
}