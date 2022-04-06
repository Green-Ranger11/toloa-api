import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(":discussionId")
  findAll(@Param('discussionId', ParseIntPipe) discussionId: number) {
    return this.commentService.findCommentsByDiscussionId(discussionId);
  }

  @Post(":discussionId/add")
  create(@Param('discussionId', ParseIntPipe) discussionId: number, @Body("content") content: string, @Body("createdBy") createdBy: string) {
    return this.commentService.create(discussionId, content, createdBy);
  }

  @Put(":discussionId/update/:id")
  update(@Param('discussionId', ParseIntPipe) discussionId: number, @Param('id', ParseIntPipe) id: number, @Body("content") content: string) {
    return this.commentService.update(discussionId, id, content);
  }

  @Delete(":discussionId/remove/:id")
  delete(@Param('discussionId', ParseIntPipe) discussionId: number, @Param('id', ParseIntPipe) id: number) {
    return this.commentService.delete(discussionId, id);
  }

}
