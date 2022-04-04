import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(":discussionId")
  findAll(@Param('discussionId') discussionId: string) {
    return this.commentService.findCommentsByDiscussionId(Number(discussionId));
  }

  @Post(":discussionId/add")
  create(@Param('discussionId') discussionId: string, @Body("content") content: string, @Body("createdBy") createdBy: string) {
    return this.commentService.create(Number(discussionId), content, createdBy);
  }

  @Put(":discussionId/update/:id")
  update(@Param('discussionId') discussionId: string, @Param('id') id: string, @Body("content") content: string) {
    return this.commentService.update(Number(discussionId), Number(id), content);
  }

  @Delete(":discussionId/remove/:id")
  delete(@Param('discussionId') discussionId: string, @Param('id') id: string) {
    return this.commentService.delete(Number(discussionId), Number(id));
  }

}
