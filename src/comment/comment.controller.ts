import { Body, Controller, Delete, Get, Param, Post, Patch, ParseIntPipe } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comment')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(":discussionId")
  findAll(@Param('discussionId', ParseIntPipe) discussionId: number) {
    return this.commentService.findCommentsByDiscussionId(discussionId);
  }

  @Post(":discussionId/add")
  create(@Param('discussionId', ParseIntPipe) discussionId: number, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(discussionId, createCommentDto);
  }

  @Patch(":discussionId/update/:id")
  update(@Param('discussionId', ParseIntPipe) discussionId: number, @Param('id', ParseIntPipe) id: number, @Body() updateContentDto: UpdateCommentDto) {
    return this.commentService.update(discussionId, id, updateContentDto);
  }

  @Delete(":discussionId/remove/:id")
  delete(@Param('discussionId', ParseIntPipe) discussionId: number, @Param('id', ParseIntPipe) id: number) {
    return this.commentService.delete(discussionId, id);
  }

}
