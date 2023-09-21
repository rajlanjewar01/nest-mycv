import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';
/**
 * Creating an Entity
 * Step 2: Connect the entity to its parent module. This creates a repository
 */
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './report.entity';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forFeature([Report])] ,
  controllers: [ReportController],
  providers: [ReportService]
})
export class ReportModule {}
