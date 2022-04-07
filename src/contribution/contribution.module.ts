import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';
import { Contribution } from './contribution.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Contribution])],
  providers: [ContributionService],
  controllers: [ContributionController]
})
export class ContributionModule {}
