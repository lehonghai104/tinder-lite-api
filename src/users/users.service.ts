import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findOne(id: string) {
    return this.usersRepository.findOne(id);
  }

  findAllUnmeet() {
    return this.usersRepository.find();
  }

  like(id: string) {
    return `This action liked a #${id} user`;
  }

  pass(id: string) {
    return `This action passed a #${id} user`;
  }
}
