import UserService from "@service/UserService";
import { Request, Response } from "express";
import { CreateUserDto } from "src/interfaces/UserDto";

 const service = new UserService();

export class UserController {

    static async create(req: Request, res: Response) {
        try {
            const {nome, email, senha, telefone} = req.body;

            const user: CreateUserDto ={
                nome,
                email,
                senha,
                telefone: telefone || ""
            }
           
            const resService = await service.create(user)
            return res.status(200).json({ resService });
        } catch (error: any) {
            return res.status(502).json({ message: error.message });
        }
    }
}