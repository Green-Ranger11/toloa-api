import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiscussionService } from './discussion.service';
import { DiscussionController } from './discussion.controller';
import { Discussion } from './discussion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Discussion])],
  providers: [DiscussionService],
  controllers: [DiscussionController]
})
export class DiscussionModule {}
