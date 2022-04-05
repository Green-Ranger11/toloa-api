import { Module } from '@nestjs/common';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';

@Module({
  providers: [ContributionService],
  controllers: [ContributionController]
})
export class ContributionModule {}
