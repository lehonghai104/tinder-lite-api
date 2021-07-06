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

  findOneByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async findAllUnmeet(user_id: string) {
    const user = await this.usersRepository.findOne({ where: { id: user_id } });
    return this.usersRepository.query(
      `select id, gender, firstname, lastname, picture from user where gender != ? and id not in (select target_user_id from action where user_id = ?)`,
      [user.gender, user_id],
    );
  }

  async removeAllUnmeet(user_id: string) {
    return this.usersRepository.query(`DELETE FROM action WHERE user_id = ?`, [
      user_id,
    ]);
  }

  async like(user_id: string, target_user_id: string) {
    await this.usersRepository.query(
      `insert into action (user_id, target_user_id, action) values (?, ?, ?);`,
      [user_id, target_user_id, 1],
    );
  }

  async pass(user_id: string, target_user_id: string) {
    await this.usersRepository.query(
      `insert into action (user_id, target_user_id, action) values (?, ?, ?);`,
      [user_id, target_user_id, 1],
    );
  }
}
