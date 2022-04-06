import { Body, Controller, Delete, Get, Param, Post, Put, ParseIntPipe } from '@nestjs/common';
import { DiscussionService } from './discussion.service';

@Controller('discussion')
export class DiscussionController {
  constructor(private discussionService: DiscussionService){}

  @Get()
  findAll() {
    return this.discussionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.discussionService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.discussionService.create(body);
  }

  @Put(':id')
  update(@Body() body: any, @Param('id', ParseIntPipe) id: number) {
    return this.discussionService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.discussionService.delete(id);
  }

}
