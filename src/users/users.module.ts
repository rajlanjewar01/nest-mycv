import { Module } from '@nestjs/common';
/**
 * Creating an Entity
 * Step 2: Connect the entity to its parent module.  This creates a repository
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  // this step create repository
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
