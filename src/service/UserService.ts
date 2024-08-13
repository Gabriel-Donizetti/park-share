import UserRepository from "@repository/UserRepository";
import { CreateUserDto } from "src/interfaces/UserDto";

export default class UserService {

    userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(u: CreateUserDto) {
        const find = await this.userRepository.find(u.email);

        if (find) {
            throw new Error('Email is already in use')
        }

        const user = await this.userRepository.create(u);
        if (!user) {
            throw new Error('On create user')
        }
        return 'User created';
    }

    async login(email: string, senha: string) {
        const find = await this.userRepository.login(email, senha);
        
        if (!find) {
            throw new Error('User not found')
        }

        return 'User found';
    }

    // async get(id: number) {
    //     const find = await this.userRepository.findTrainer(id);
    //     if (!find) {
    //         throw new Error('User not found')
    //     }

    //     return find;        

    // }

    //  async update(UpdateUserDto)){
    //     const find = await this.userRepository.findTrainer(id);
    //     if(!find){
    //         throw new Error('User not found')
    //     }
    //     const user = await this.userRepository.update(UpdateUserDto);
    //     return 'User updated';        
    // }

    // async delete(id: number) {
    //     const find = await this.userRepository.findTrainer(id)
    //     if (!find) {
    //         throw new Error('User not found')
    //     }

    //     const user = await this.userRepository.delete(id)
    //     return 'User deleted'
    // }

}