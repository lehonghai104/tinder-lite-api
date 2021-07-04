import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

const users: User[] = [
  {
    id: '60d0fe4f5311236168a109ca',
    title: 'ms',
    firstName: 'Sara',
    lastName: 'Andersen',
    email: 'sara.andersen@example.com',
    picture: 'https://randomuser.me/api/portraits/women/58.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109cb',
    title: 'miss',
    firstName: 'Edita',
    lastName: 'Vestering',
    email: 'edita.vestering@example.com',
    picture: 'https://randomuser.me/api/portraits/med/women/89.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109cc',
    title: 'ms',
    firstName: 'Adina',
    lastName: 'Barbosa',
    email: 'edina.barbosa@example.com',
    picture: 'https://randomuser.me/api/portraits/med/women/28.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109cd',
    title: 'mr',
    firstName: 'Roberto',
    lastName: 'Vega',
    email: 'roberto.vega@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/25.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109ce',
    title: 'mr',
    firstName: 'Rudi',
    lastName: 'Droste',
    email: 'rudi.droste@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/83.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109cf',
    title: 'mrs',
    firstName: 'Carolina',
    lastName: 'Lima',
    email: 'carolina.lima@example.com',
    picture: 'https://randomuser.me/api/portraits/med/women/5.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109d0',
    title: 'mr',
    firstName: 'Emre',
    lastName: 'Asikoglu',
    email: 'emre.asikoglu@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/23.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109d1',
    title: 'mr',
    firstName: 'Kent',
    lastName: 'Brewer',
    email: 'kent.brewer@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/52.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109d2',
    title: 'mr',
    firstName: 'Evan',
    lastName: 'Carlson',
    email: 'evan.carlson@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/80.jpg',
    password: '123456',
  },
  {
    id: '60d0fe4f5311236168a109d3',
    title: 'mr',
    firstName: 'Friedrich-Karl',
    lastName: 'Brand',
    email: 'friedrich-karl.brand@example.com',
    picture: 'https://randomuser.me/api/portraits/med/men/7.jpg',
    password: '123456',
  },
];

@Injectable()
export class UsersService {
  findOne(email: string) {
    return users.find((user) => user.email === email);
  }

  findAllUnmeet() {
    return { data: users };
  }

  like(id: string) {
    return `This action liked a #${id} user`;
  }

  pass(id: string) {
    return `This action passed a #${id} user`;
  }
}
