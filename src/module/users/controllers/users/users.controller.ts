import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from '../../dto/createUser.dto';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(
    private userService:UsersService
  ){}

  @Get()
  getUser(){
    console.log('getUser');
  }

  @Post()
  createUser(@Body() createUserDto:CreateUserDto){
    this.userService.createUser();
  }
}