import { Body, Controller, Post, Get, Patch, Param, Query  } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.userService.create(body.email, body.password);
    }

    //find user by perticular id
    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id)); //converting string id to number
    }

    //find all users with given email
    @Get() 
    findAllUser(@Query('email') email:string) {
        return this.userService.find(email);
    }
}
