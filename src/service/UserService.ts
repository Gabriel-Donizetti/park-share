import UserRepository from "@repository/UserRepository";
import { CreateUserDto } from "src/interfaces/UserDto";

export default class UserService {

    userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    async create(User: CreateUserDto) {
        const trainer = await this.userRepository.create(User);
        if (!trainer) {
            throw new Error('Error on create user')
        }
        return trainer;
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