import { Body, Controller, Post, Get, Patch, Param, Query, Delete  } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {}

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        this.userService.create(body.email, body.password);
    }

    //find user by particular id
    @Get('/:id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id)); //converting string id to number
    }

    //find all users with given email
    @Get() 
    findAllUser(@Query('email') email:string) {
        return this.userService.find(email);
    }

    //delete user with specific id
    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.remove(parseInt(id));
    }

    //update user
    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) { 
        return this.userService.update(parseInt(id), body);
    }

}
