import { Controller, Get, Post, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Get('unmeet')
  findAllUnmeet() {
    return this.usersService.findAllUnmeet();
  }

  @Post('like/:id')
  like(@Param('id') id: string) {
    return this.usersService.like(id);
  }

  @Post('pass/:id')
  pass(@Param('id') id: string) {
    return this.usersService.pass(id);
  }
}
