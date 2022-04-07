import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';
import { Contribution } from './contribution.entity';
import { UserModule } from '../user/user.module';
import { TopicModule } from '../topic/topic.module';
@Module({
  imports: [TypeOrmModule.forFeature([Contribution]), UserModule, TopicModule],
  providers: [ContributionService],
  controllers: [ContributionController]
})
export class ContributionModule {}
