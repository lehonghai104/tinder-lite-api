import {
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Request,
  Delete,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtAuthGuard)
  @Get('unmeet')
  findAllUnmeet(@Request() req): Promise<User[]> {
    return this.usersService.findAllUnmeet(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('meet')
  RemoveAllMeet(@Request() req): Promise<User[]> {
    return this.usersService.removeAllUnmeet(req.user.id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('like/:targer_id')
  like(@Request() req, @Param('targer_id') targer_id: string) {
    return this.usersService.like(req.user.id, targer_id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('pass/:targer_id')
  pass(@Request() req, @Param('targer_id') targer_id: string) {
    return this.usersService.pass(req.user.id, targer_id);
  }
}
