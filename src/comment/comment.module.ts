import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { Comment } from './comment.entity';
import { DiscussionModule } from '../discussion/discussion.module';
import { UserModule } from '../user/user.module';
@Module({
  imports: [TypeOrmModule.forFeature([Comment]), DiscussionModule, UserModule],
  providers: [CommentService],
  controllers: [CommentController]
})
export class CommentModule {}
