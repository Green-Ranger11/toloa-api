import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { Discussion } from './discussion.entity';
import { UserModule } from '../user/user.module';
import { TopicModule } from '../topic/topic.module';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion]), UserModule, TopicModule],
  providers: [DiscussionService],
  controllers: [DiscussionController],
  exports: [DiscussionService]
})
export class DiscussionModule {}
