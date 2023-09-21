import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ReportModule } from './report/report.module';
/**
 * Creating an Entity
 * Step 3: Connect the entity to the root connection (in app module)
 */
import { User } from './users/user.entity';
import { Report } from  './report/report.entity';

@Module({
  imports: [
    UsersModule,
    ReportModule,
    TypeOrmModule.forRoot({
      // create sqlite database type
      type: 'sqlite',
      // name for the database
      database: 'db.sqlite',
      // add entity array
      entities: [User, Report],
      synchronize: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
