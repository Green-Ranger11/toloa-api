import { Module } from '@nestjs/common';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';

@Module({
  providers: [DiscussionService],
  controllers: [DiscussionController]
})
export class DiscussionModule {}
